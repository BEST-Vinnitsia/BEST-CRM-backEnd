import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingGetByIdDto } from './dto/meeting.getById.dto';
import { MeetingCreateDto } from './dto/meeting.create.dto';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post('create')
  async create(@Body() data: MeetingCreateDto) {
    return await this.meetingService.create(data);
  }

  @Get('list')
  async list() {
    return await this.meetingService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: MeetingGetByIdDto) {
    return await this.meetingService.getById(data);
  }
}
