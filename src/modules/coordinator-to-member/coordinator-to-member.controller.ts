import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinator-to-member.service';
import { CoordinatorToMemberGetByIdDto } from './dto/get-by-id.dto';
import { CoordinatorToMemberCreateDto } from './dto/create.dto';
import { CoordinatorToMemberUpdateDto } from './dto/update.dto';
import { CoordinatorToMemberDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { CoordinatorToMember } from './entity/coordinator-to-member.entity';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';
import { CoordinatorToMemberGetByCadenceIdDto } from './dto/get-by-cadence-id.dto';
import { CoordinatorToMemberGetByCoordinatorIdDto } from './dto/get-by-coordinator-id.dto';
import { CoordinatorToMemberGetByMemberIdDto } from './dto/get-by-member-id.dto';

@ApiSecurity('basic')
@ApiTags('Coordinator to member')
@Controller('api/v/1/coordinator-to-member')
export class CoordinatorToMemberController {
    constructor(private readonly coordinatorToMemberService: CoordinatorToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [CoordinatorToMember] })
    async getList() {
        return await this.coordinatorToMemberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getById(@Query() dto: CoordinatorToMemberGetByIdDto) {
        return await this.coordinatorToMemberService.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getByMemberId(@Query() dto: CoordinatorToMemberGetByMemberIdDto) {
        return await this.coordinatorToMemberService.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getByCadenceId(@Query() dto: CoordinatorToMemberGetByCadenceIdDto) {
        return await this.coordinatorToMemberService.getByCadenceId(dto);
    }

    @Get('by-coordinator-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getByCoordinatorId(@Query() dto: CoordinatorToMemberGetByCoordinatorIdDto) {
        return await this.coordinatorToMemberService.getByCoordinatorId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async create(@Body() dto: CoordinatorToMemberCreateDto) {
        return await this.coordinatorToMemberService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async update(@Body() dto: CoordinatorToMemberUpdateDto) {
        return await this.coordinatorToMemberService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: CoordinatorToMemberDeleteArrayDto) {
        return await this.coordinatorToMemberService.delete(dto.coordinatorToMemberId);
    }
}
