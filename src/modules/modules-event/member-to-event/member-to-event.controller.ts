import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { MemberToEventService } from './member-to-event.service';
import { MemberToEventGetByIdDto } from './dto/get-by-id.dto';
import { MemberToEventCreateDto } from './dto/create.dto';
import { MemberToEventUpdateDto } from './dto/update.dto';
import { MemberToEventDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { MemberToEvent } from './entity/member-to-event.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { MemberToEventGetByNewEventIdDto } from './dto/get-by-new-event-id.dto';
import { MemberToEventGetByMemberIdDto } from './dto/get-by-member-id.dto';
import { MemberToEventGetByResponsibleIdDto } from './dto/get-by-responsible-id.dto';

@ApiSecurity('basic')
@ApiTags('Member to event')
@Controller('api/v/1/member-to-event')
export class MemberToEventController {
    constructor(private readonly memberToEventService: MemberToEventService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [MemberToEvent] })
    async list() {
        return await this.memberToEventService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getById(@Query() dto: MemberToEventGetByIdDto) {
        return await this.memberToEventService.getById(dto);
    }

    @Get('by-new-event-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getByNewEventId(@Query() dto: MemberToEventGetByNewEventIdDto) {
        return await this.memberToEventService.getByNewEventId(dto);
    }

    @Get('by-responsible-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getByResponsibleId(@Query() dto: MemberToEventGetByResponsibleIdDto) {
        return await this.memberToEventService.getByResponsibleId(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: MemberToEvent })
    async getByMemberId(@Query() dto: MemberToEventGetByMemberIdDto) {
        return await this.memberToEventService.getByMemberId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: MemberToEvent })
    async create(@Body() dto: MemberToEventCreateDto) {
        return await this.memberToEventService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: MemberToEvent })
    async update(@Body() dto: MemberToEventUpdateDto) {
        return await this.memberToEventService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: MemberToEvent })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: MemberToEventDeleteArrayDto) {
        return this.memberToEventService.delete(dto.membersToEventsId);
    }
}
