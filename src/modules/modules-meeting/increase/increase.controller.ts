import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
    CreateEntity,
    DeleteArrayEntity,
    DeleteEntity,
    GetByIdEntity,
    GetByMeetingIdEntity,
    GetByMemberIdEntity,
    GetListEntity,
    UpdateEntity,
} from './entity';
import { IncreaseService } from './increase.service';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByIdDto, GetByMeetingIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { v2 } from '../../../constants/api-version';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByIdRes,
    IGetByMeetingIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';

interface IIncreaseController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByMeetingId(dto: GetByMeetingIdDto): Promise<IGetByMeetingIdRes[]>;

    getByMemberId(dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Increase')
@Controller(`${v2}/increase`)
export class IncreaseController implements IIncreaseController {
    constructor(private readonly service: IncreaseService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [GetListEntity] })
    async getList(): Promise<IGetListRes[]> {
        return this.service.getList();
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: [GetByMemberIdEntity] })
    async getByMemberId(@Query() dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]> {
        return this.service.getByMemberId(dto);
    }

    @Get('by-meeting-id')
    @ApiCreatedResponse({ type: [GetByMeetingIdEntity] })
    async getByMeetingId(@Query() dto: GetByMeetingIdDto): Promise<IGetByMeetingIdRes[]> {
        return this.service.getByMeetingId(dto);
    }

    @Get('')
    @ApiCreatedResponse({ type: GetByIdEntity })
    async getById(@Query() dto: GetByIdDto): Promise<IGetByIdRes> {
        return this.service.getById(dto);
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
        return this.service.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return this.service.deleteArray(dto.id);
    }
}
