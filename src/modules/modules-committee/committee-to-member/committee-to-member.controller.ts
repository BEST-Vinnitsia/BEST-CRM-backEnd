import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { CommitteeToMemberService } from './committee-to-member.service';
import { CommitteeToMemberGetByIdDto } from './dto/get-by-id.dto';
import { CommitteeToMemberCreateDto } from './dto/create.dto';
import { CommitteeToMemberUpdateDto } from './dto/update.dto';
import { CommitteeToMemberDeleteArrayDto } from './dto/delete.dto';
import { CommitteeToMemberGetByCadenceIdDto } from './dto/get-by-cadence-id.dto';
import { CommitteeToMemberGetByMemberIdDto } from './dto/get-by-member-id.dto';
import { CommitteeToMemberGetByCommitteeIdDto } from './dto/get-by-committee-id.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { CommitteeToMember } from './entity/committee-to-member.entity';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Committee to member')
@Controller('api/v/1/committee-to-member')
export class CommitteeToMemberController {
    constructor(private readonly committeeToMemberService: CommitteeToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [CommitteeToMember] })
    async getList() {
        return await this.committeeToMemberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getById(@Query() dto: CommitteeToMemberGetByIdDto) {
        return await this.committeeToMemberService.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getByMemberId(@Query() dto: CommitteeToMemberGetByMemberIdDto) {
        return await this.committeeToMemberService.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getByCadenceId(@Query() dto: CommitteeToMemberGetByCadenceIdDto) {
        return await this.committeeToMemberService.getByCadenceId(dto);
    }

    @Get('by-committee-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getByCommitteeId(@Query() dto: CommitteeToMemberGetByCommitteeIdDto) {
        return await this.committeeToMemberService.getByCommitteeId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async create(@Body() dto: CommitteeToMemberCreateDto) {
        return await this.committeeToMemberService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async update(@Body() dto: CommitteeToMemberUpdateDto) {
        return await this.committeeToMemberService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: CommitteeToMember })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: CommitteeToMemberDeleteArrayDto) {
        return await this.committeeToMemberService.delete(dto.committeeToMemberId);
    }
}
