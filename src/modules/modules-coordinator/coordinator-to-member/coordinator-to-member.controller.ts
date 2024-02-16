import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinator-to-member.service';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByCadenceIdDto, GetByCoordinatorIdDto, GetByIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
    CreateEntity,
    DeleteArrayEntity,
    DeleteEntity,
    GetByCadenceIdEntity,
    GetByCoordinatorIdEntity,
    GetByIdEntity,
    GetByMemberIdEntity,
    GetListEntity,
    UpdateEntity,
} from './entity';
import { v1 } from '../../../constants/api-version';

import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByCadenceIdRes,
    IGetByCoordinatorIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';

interface ICoordinatorToMemberController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByCoordinatorId(dto: GetByCoordinatorIdDto): Promise<IGetByCoordinatorIdRes[]>;

    getByCadenceId(dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]>;

    getByMemberId(dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Coordinator to member')
@Controller(`${v1}/coordinator-to-member`)
export class CoordinatorToMemberController implements ICoordinatorToMemberController {
    constructor(private readonly coordinatorToMemberService: CoordinatorToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [GetListEntity] })
    async getList(): Promise<IGetListRes[]> {
        return await this.coordinatorToMemberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: GetByIdEntity })
    async getById(@Query() dto: GetByIdDto): Promise<IGetByIdRes> {
        return await this.coordinatorToMemberService.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: GetByMemberIdEntity })
    async getByMemberId(@Query() dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]> {
        return await this.coordinatorToMemberService.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: GetByCadenceIdEntity })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]> {
        return await this.coordinatorToMemberService.getByCadenceId(dto);
    }

    @Get('by-coordinator-id')
    @ApiCreatedResponse({ type: GetByCoordinatorIdEntity })
    async getByCoordinatorId(@Query() dto: GetByCoordinatorIdDto): Promise<IGetByCoordinatorIdRes[]> {
        return await this.coordinatorToMemberService.getByCoordinatorId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('')
    @ApiCreatedResponse({ type: CreateEntity })
    async create(@Body() dto: CreateDto): Promise<ICreateRes> {
        return await this.coordinatorToMemberService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('')
    @ApiCreatedResponse({ type: UpdateEntity })
    async update(@Body() dto: UpdateDto): Promise<IUpdateRes> {
        return await this.coordinatorToMemberService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('by-id')
    @ApiCreatedResponse({ type: DeleteEntity })
    async deleteById(@Body() dto: DeleteDto): Promise<IDeleteRes> {
        return await this.coordinatorToMemberService.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return await this.coordinatorToMemberService.deleteArray(dto.id);
    }
}
