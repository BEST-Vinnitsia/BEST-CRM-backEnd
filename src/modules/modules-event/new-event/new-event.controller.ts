import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { NewEventService } from './new-event.service';
import { CreateDto, DeleteArrayDto, GetByCadenceIdDto, GetByEventIdDto, GetByIdDto, UpdateDto } from './dto';
import {
    CreateEntity,
    DeleteArrayEntity,
    DeleteEntity,
    GetByCadenceIdEntity,
    GetByEventIdEntity,
    GetByIdEntity,
    GetListEntity,
    UpdateEntity,
} from './entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { v2 } from '../../../constants/api-version';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByCadenceIdRes,
    IGetByEventIdRes,
    IGetByIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import { DeleteDto } from '../event/dto';

interface INewEventController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByCadenceId(dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]>;

    getByEventId(dto: GetByEventIdDto): Promise<IGetByEventIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('New event')
@Controller(`${v2}/new-event`)
export class NewEventController implements INewEventController {
    constructor(private readonly service: NewEventService) {}

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

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: GetByCadenceIdEntity })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]> {
        return await this.service.getByCadenceId(dto);
    }

    @Get('by-event-id')
    @ApiCreatedResponse({ type: GetByEventIdEntity })
    async getByEventId(@Query() dto: GetByEventIdDto): Promise<IGetByEventIdRes[]> {
        return await this.service.getByEventId(dto);
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
        return await this.service.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return await this.service.deleteArray(dto.id);
    }
}
