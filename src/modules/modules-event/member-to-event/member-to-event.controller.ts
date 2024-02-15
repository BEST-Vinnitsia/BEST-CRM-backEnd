import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { MemberToEventService } from './member-to-event.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, GetByMemberIdDto, GetByNewEventIdDto, GetByResponsibleIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MemberToEvent } from './entity/member-to-event.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Member to event')
@Controller(`${v1}/member-to-event`)
export class MemberToEventController {
    constructor(private readonly service: MemberToEventService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [MemberToEvent] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-new-event-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getByNewEventId(@Query() dto: GetByNewEventIdDto) {
        return await this.service.getByNewEventId(dto);
    }

    @Get('by-responsible-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getByResponsibleId(@Query() dto: GetByResponsibleIdDto) {
        return await this.service.getByResponsibleId(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getByMemberId(@Query() dto: GetByMemberIdDto) {
        return await this.service.getByMemberId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: MemberToEvent })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: MemberToEvent })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: MemberToEvent })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.membersToEventsId);
    }
}
