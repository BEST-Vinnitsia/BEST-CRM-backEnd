import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { NewEventService } from './new-event.service';
import { NewEventGetByIdDto } from './dto/get-by-id.dto';
import { NewEventCreateDto } from './dto/create.dto';
import { NewEventUpdateDto } from './dto/update.dto';
import { NewEventDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { NewEvent } from './entity/new-event.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';
import { NewEventGetByCadenceIdDto } from './dto/get-by-cadence-id.dto';
import { NewEventGetByEventIdDto } from './dto/get-by-event-id.dto';

@ApiSecurity('basic')
@ApiTags('New event')
@Controller('api/v/1/new-event')
export class NewEventController {
    constructor(private readonly newEventService: NewEventService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [NewEvent] })
    async list() {
        return await this.newEventService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: NewEvent })
    async getById(@Query() dto: NewEventGetByIdDto) {
        return await this.newEventService.getById(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: NewEvent })
    async getByCadenceId(@Query() dto: NewEventGetByCadenceIdDto) {
        return await this.newEventService.getByCadenceId(dto);
    }

    @Get('by-event-id')
    @ApiCreatedResponse({ type: NewEvent })
    async getByEventId(@Query() dto: NewEventGetByEventIdDto) {
        return await this.newEventService.getByEventId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: NewEvent })
    async create(@Body() dto: NewEventCreateDto) {
        return await this.newEventService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: NewEvent })
    async update(@Body() dto: NewEventUpdateDto) {
        return await this.newEventService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: NewEvent })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: NewEventDeleteArrayDto) {
        return this.newEventService.delete(dto.newEventsId);
    }
}
