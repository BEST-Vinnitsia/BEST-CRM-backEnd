import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Event } from './entity/event.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Event')
@Controller('api/v/1/event')
export class EventController {
    constructor(private readonly service: EventService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Event] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Event })
    async byId(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Event })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Event })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Event })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.eventsId);
    }
}
