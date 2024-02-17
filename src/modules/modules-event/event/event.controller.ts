import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreateEntity, DeleteArrayEntity, DeleteEntity, GetByIdEntity, GetListEntity, UpdateEntity } from './entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { v2 } from '../../../constants/api-version';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';

interface IEventController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Event')
@Controller(`${v2}/event`)
export class EventController implements IEventController {
    constructor(private readonly service: EventService) {}

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
    async deleteById(@Body() dto: DeleteDto): Promise<IDeleteRes> {
        return this.service.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return this.service.deleteArray(dto.id);
    }
}
