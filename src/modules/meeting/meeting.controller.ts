import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingGetByIdDto } from './dto/getById.dto';
import { MeetingCreateDto } from './dto/create.dto';
import { MeetingUpdateDto } from './dto/update.dto';
import { MeetingDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { MeetingDto } from './dto/meeting.dto';

@ApiSecurity('basic')
@ApiTags('Meeting')
@Controller('api/v/1/meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse({ type: [MeetingDto] })
  async list() {
    return await this.meetingService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse({ type: MeetingDto })
  async byId(@Query() data: MeetingGetByIdDto) {
    return await this.meetingService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse({ type: MeetingDto })
  async create(@Body() data: MeetingCreateDto) {
    return await this.meetingService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse({ type: MeetingDto })
  async update(@Body() data: MeetingUpdateDto) {
    return await this.meetingService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse({ type: MeetingDto })
  async delete(@Query() data: MeetingDeleteDto) {
    return await this.meetingService.delete(data);
  }
}
