import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting_GetById_Dto } from './dto/meeting.getById.dto';
import { Meeting_Create_Dto } from './dto/meeting.create.dto';

@Controller('api/v/1/meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post('create')
  async create(@Body() data: Meeting_Create_Dto) {
    return await this.meetingService.create(data);
  }

  @Get('list')
  async list() {
    return await this.meetingService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: Meeting_GetById_Dto) {
    return await this.meetingService.getById(data);
  }
}
