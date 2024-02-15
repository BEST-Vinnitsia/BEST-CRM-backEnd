import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MeetingEntity } from './entity/meeting.entity';
import { MeetingService } from './meeting.service';
import { CreateDto, DeleteArrayDto, GetByCadenceIdDto, GetByIdDto, UpdateDto } from './dto';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Meeting')
@Controller(`${v1}/meeting`)
export class MeetingController {
    constructor(private readonly service: MeetingService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [MeetingEntity] })
    async getList() {
        return this.service.getList();
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: [MeetingEntity] })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto) {
        return this.service.getByCadenceId(dto);
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: MeetingEntity })
    async getById(@Query() dto: GetByIdDto) {
        return this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: MeetingEntity })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: MeetingEntity })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: MeetingEntity })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.meetingsId);
    }
}
