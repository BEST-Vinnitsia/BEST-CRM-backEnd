import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingGetByIdDto } from './dto/getById.dto';
import { MeetingCreateDto } from './dto/create.dto';
import { MeetingUpdateDto } from './dto/update.dto';
import { MeetingDeleteDto } from './dto/delete.dto';

@Controller('api/v/1/meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  async list() {
    return await this.meetingService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: MeetingGetByIdDto) {
    return await this.meetingService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  async create(@Body() data: MeetingCreateDto) {
    return await this.meetingService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  async update(@Body() data: MeetingUpdateDto) {
    return await this.meetingService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  async delete(@Query() data: MeetingDeleteDto) {
    return await this.meetingService.delete(data);
  }
}
