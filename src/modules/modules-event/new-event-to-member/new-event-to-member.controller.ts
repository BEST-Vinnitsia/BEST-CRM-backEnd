import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { NewEventToMemberService } from './new-event-to-member.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, GetByMemberIdDto, GetByNewEventIdDto, GetByResponsibleIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
    CreateEntity,
    DeleteArrayEntity,
    DeleteEntity,
    GetByIdEntity,
    GetByMemberIdEntity,
    GetByNewEventIdEntity,
    GetByResponsibleIdEntity,
    GetListEntity,
    UpdateEntity,
} from './entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { v2 } from '../../../constants/api-version';
import { DeleteDto } from '../event/dto';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetByNewEventIdRes,
    IGetByResponsibleIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';

interface IMemberToNewEventController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByNewEventId(dto: GetByNewEventIdDto): Promise<IGetByNewEventIdRes[]>;

    getByResponsibleId(dto: GetByResponsibleIdDto): Promise<IGetByResponsibleIdRes[]>;

    getByMemberId(dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('New event to member')
@Controller(`${v2}/new-event-to-member`)
export class NewEventToMemberController implements IMemberToNewEventController {
    constructor(private readonly service: NewEventToMemberService) {}

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

    @Get('by-new-event-id')
    @ApiCreatedResponse({ type: GetByNewEventIdEntity })
    async getByNewEventId(@Query() dto: GetByNewEventIdDto): Promise<IGetByNewEventIdRes[]> {
        return await this.service.getByNewEventId(dto);
    }

    @Get('by-responsible-id')
    @ApiCreatedResponse({ type: GetByResponsibleIdEntity })
    async getByResponsibleId(@Query() dto: GetByResponsibleIdDto): Promise<IGetByResponsibleIdRes[]> {
        return await this.service.getByResponsibleId(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: GetByMemberIdEntity })
    async getByMemberId(@Query() dto: GetByMemberIdDto): Promise<IGetByMemberIdRes[]> {
        return await this.service.getByMemberId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
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
