import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { CommitteeToMemberService } from './committee-to-member.service';
import { CreateDto, DeleteArrayDto, GetByCadenceIdDto, GetByCommitteeIdDto, GetByIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CommitteeToMember } from './entity/committee-to-member.entity';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Committee to member')
@Controller('api/v/1/committee-to-member')
export class CommitteeToMemberController {
    constructor(private readonly service: CommitteeToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [CommitteeToMember] })
    async getList() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getByMemberId(@Query() dto: GetByMemberIdDto) {
        return await this.service.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto) {
        return await this.service.getByCadenceId(dto);
    }

    @Get('by-committee-id')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async getByCommitteeId(@Query() dto: GetByCommitteeIdDto) {
        return await this.service.getByCommitteeId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: CommitteeToMember })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: CommitteeToMember })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.service.delete(dto.committeeToMemberId);
    }
}
