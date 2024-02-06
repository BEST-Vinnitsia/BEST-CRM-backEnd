import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleGetByIdDto } from './dto/get-by-id.dto';
import { ResponsibleCreateDto } from './dto/create.dto';
import { ResponsibleUpdateDto } from './dto/update.dto';
import { ResponsibleDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Responsible } from './entity/responsible.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';
import { ResponsibleGetByEventIdDto } from './dto/get-by-event-id.dto';

@ApiSecurity('basic')
@ApiTags('Responsible')
@Controller('api/v/1/responsible')
export class ResponsibleController {
    constructor(private readonly responsibleService: ResponsibleService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Responsible] })
    async list() {
        return await this.responsibleService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Responsible })
    async getById(@Query() dto: ResponsibleGetByIdDto) {
        return await this.responsibleService.getById(dto);
    }

    @Get('by-event-id')
    @ApiCreatedResponse({ type: Responsible })
    async getByEventId(@Query() dto: ResponsibleGetByEventIdDto) {
        return await this.responsibleService.getByEventId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Responsible })
    async create(@Body() dto: ResponsibleCreateDto) {
        return await this.responsibleService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Responsible })
    async update(@Body() dto: ResponsibleUpdateDto) {
        return await this.responsibleService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Responsible })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: ResponsibleDeleteArrayDto) {
        return this.responsibleService.delete(dto.responsibleId);
    }
}
