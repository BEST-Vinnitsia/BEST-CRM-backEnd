import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { CreateDto, DeleteArrayDto, GetByEventIdDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Responsible } from './entity/responsible.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Responsible')
@Controller(`${v1}/responsible`)
export class ResponsibleController {
    constructor(private readonly service: ResponsibleService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Responsible] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Responsible })
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-event-id')
    @ApiCreatedResponse({ type: Responsible })
    async getByEventId(@Query() dto: GetByEventIdDto) {
        return await this.service.getByEventId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Responsible })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Responsible })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Responsible })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.responsibleId);
    }
}
