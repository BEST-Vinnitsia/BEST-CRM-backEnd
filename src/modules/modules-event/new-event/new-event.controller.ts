import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { NewEventService } from './new-event.service';
import { CreateDto, DeleteArrayDto, GetByCadenceIdDto, GetByEventIdDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { NewEvent } from './entity/new-event.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('New event')
@Controller('api/v/1/new-event')
export class NewEventController {
    constructor(private readonly service: NewEventService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [NewEvent] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: NewEvent })
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: NewEvent })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto) {
        return await this.service.getByCadenceId(dto);
    }

    @Get('by-event-id')
    @ApiCreatedResponse({ type: NewEvent })
    async getByEventId(@Query() dto: GetByEventIdDto) {
        return await this.service.getByEventId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: NewEvent })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: NewEvent })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: NewEvent })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.newEventsId);
    }
}
