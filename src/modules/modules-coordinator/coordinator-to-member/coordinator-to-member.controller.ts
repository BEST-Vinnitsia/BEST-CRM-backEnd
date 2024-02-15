import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinator-to-member.service';
import { CreateDto, DeleteArrayDto, GetByCadenceIdDto, GetByCoordinatorIdDto, GetByIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CoordinatorToMember } from './entity/coordinator-to-member.entity';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Coordinator to member')
@Controller(`${v1}/coordinator-to-member`)
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
    async getById(@Query() dto: GetByIdDto) {
        return await this.coordinatorToMemberService.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getByMemberId(@Query() dto: GetByMemberIdDto) {
        return await this.coordinatorToMemberService.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto) {
        return await this.coordinatorToMemberService.getByCadenceId(dto);
    }

    @Get('by-coordinator-id')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async getByCoordinatorId(@Query() dto: GetByCoordinatorIdDto) {
        return await this.coordinatorToMemberService.getByCoordinatorId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async create(@Body() dto: CreateDto) {
        return await this.coordinatorToMemberService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    async update(@Body() dto: UpdateDto) {
        return await this.coordinatorToMemberService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: CoordinatorToMember })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.coordinatorToMemberService.delete(dto.coordinatorToMemberId);
    }
}
