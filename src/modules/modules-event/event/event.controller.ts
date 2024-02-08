import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { EventService } from './event.service';
import { EventGetByIdDto } from './dto/get-by-id.dto';
import { EventCreateDto } from './dto/create.dto';
import { EventUpdateDto } from './dto/update.dto';
import { EventDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Event } from './entity/event.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Event')
@Controller('api/v/1/event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Event] })
    async list() {
        return await this.eventService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Event })
    async byId(@Query() dto: EventGetByIdDto) {
        return await this.eventService.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Event })
    async create(@Body() dto: EventCreateDto) {
        return await this.eventService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Event })
    async update(@Body() dto: EventUpdateDto) {
        return await this.eventService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Event })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: EventDeleteArrayDto) {
        return this.eventService.delete(dto.eventsId);
    }
}
