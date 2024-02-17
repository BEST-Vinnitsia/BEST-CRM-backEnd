import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreateEntity, DeleteArrayEntity, DeleteEntity, GetByCadenceIdEntity, GetByIdEntity, GetListEntity, UpdateEntity } from './entity';
import { MeetingService } from './meeting.service';
import { v2 } from '../../../constants/api-version';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByCadenceIdRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByCadenceIdDto, GetByIdDto, UpdateDto } from './dto';

interface IMeetingController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    getByCadenceId(dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Meeting')
@Controller(`${v2}/meeting`)
export class MeetingController implements IMeetingController {
    constructor(private readonly service: MeetingService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [GetListEntity] })
    async getList(): Promise<IGetListRes[]> {
        return this.service.getList();
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: [GetByCadenceIdEntity] })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto): Promise<IGetByCadenceIdRes[]> {
        return this.service.getByCadenceId(dto);
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
