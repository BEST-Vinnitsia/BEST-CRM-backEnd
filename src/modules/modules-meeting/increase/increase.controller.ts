import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { IncreaseEntity } from './entity/increase.entity';
import { IncreaseService } from './increase.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, GetByMeetingIdDto, GetByMemberIdDto, UpdateDto } from './dto';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Increase')
@Controller(`${v1}/increase`)
export class IncreaseController {
    constructor(private readonly service: IncreaseService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [IncreaseEntity] })
    async getList() {
        return this.service.getList();
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: [IncreaseEntity] })
    async getByMemberId(@Query() dto: GetByMemberIdDto) {
        return this.service.getByMemberId(dto);
    }

    @Get('by-meeting-id')
    @ApiCreatedResponse({ type: [IncreaseEntity] })
    async getByMeetingId(@Query() dto: GetByMeetingIdDto) {
        return this.service.getByMeetingId(dto);
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: IncreaseEntity })
    async getById(@Query() dto: GetByIdDto) {
        return this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: IncreaseEntity })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: IncreaseEntity })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: IncreaseEntity })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.increasesId);
    }
}
