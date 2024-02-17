import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { BoardToMemberService } from './board-to-member.service';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
    CreateEntity,
    DeleteArrayEntity,
    DeleteEntity,
    GetByBoardIdEntity,
    GetByCadenceIdEntity,
    GetByIdEntity,
    GetByMemberIdEntity,
    GetListEntity,
    UpdateEntity,
} from './entity';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByBoardIdDto, GetByCadenceIdDto, GetByIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { v2 } from '../../../constants/api-version';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByBoardIdRes,
    IGetByCadenceIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';

interface IBoardToMemberController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByBoardId(dto: GetByBoardIdDto): Promise<IGetByBoardIdRes[]>;

    getByCadenceId(dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]>;

    getByMemberId(dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Board to member')
@Controller(`${v2}/board-to-member`)
export class BoardToMemberController implements IBoardToMemberController {
    constructor(private readonly service: BoardToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [GetListEntity] })
    async getList(): Promise<IGetListRes[]> {
        return await this.service.getList();
    }

    @Get('')
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

    @Get('by-board-id')
    @ApiCreatedResponse({ type: GetByBoardIdEntity })
    async getByBoardId(@Query() dto: GetByBoardIdDto): Promise<IGetByBoardIdRes[]> {
        return await this.service.getByBoardId(dto);
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
    @Delete('')
    @ApiCreatedResponse({ type: DeleteEntity })
    async deleteById(@Query() dto: DeleteDto): Promise<IDeleteRes> {
        return await this.service.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return await this.service.deleteArray(dto.id);
    }
}
