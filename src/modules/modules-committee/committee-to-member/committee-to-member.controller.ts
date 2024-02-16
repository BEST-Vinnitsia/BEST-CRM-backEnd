import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CommitteeToMemberService } from './committee-to-member.service';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByCadenceIdDto, GetByCommitteeIdDto, GetByIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { v1 } from '../../../constants/api-version';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByCadenceIdRes,
    IGetByCommitteeIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import {
    CreateEntity,
    DeleteArrayEntity,
    DeleteEntity,
    GetByCadenceIdEntity,
    GetByCommitteeIdEntity,
    GetByIdEntity,
    GetByMemberIdEntity,
    GetListEntity,
    UpdateEntity,
} from './entity';

interface ICommitteeToMemberController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByCommitteeId(dto: GetByCommitteeIdDto): Promise<IGetByCommitteeIdRes[]>;

    getByCadenceId(dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]>;

    getByMemberId(dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Committee to member')
@Controller(`${v1}/committee-to-member`)
export class CommitteeToMemberController implements ICommitteeToMemberController {
    constructor(private readonly service: CommitteeToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [GetListEntity] })
    async getList(): Promise<IGetListRes[]> {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: GetByIdEntity })
    async getById(@Query() dto: GetByIdDto): Promise<IGetByIdRes> {
        return await this.service.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: GetByMemberIdEntity })
    async getByMemberId(@Query() dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]> {
        return await this.service.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: GetByCadenceIdEntity })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]> {
        return await this.service.getByCadenceId(dto);
    }

    @Get('by-committee-id')
    @ApiCreatedResponse({ type: GetByCommitteeIdEntity })
    async getByCommitteeId(@Query() dto: GetByCommitteeIdDto): Promise<IGetByCommitteeIdRes[]> {
        return await this.service.getByCommitteeId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('')
    @ApiCreatedResponse({ type: CreateEntity })
    async create(@Body() dto: CreateDto): Promise<ICreateRes> {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('')
    @ApiCreatedResponse({ type: UpdateEntity })
    async update(@Body() dto: UpdateDto): Promise<IUpdateRes> {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: DeleteEntity })
    async deleteById(@Body() dto: DeleteDto): Promise<IDeleteRes> {
        return await this.service.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return await this.service.deleteArray(dto.id);
    }
}
