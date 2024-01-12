import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingGetByIdDto } from './dto/getById.dto';
import { MeetingCreateDto } from './dto/create.dto';
import { MeetingUpdateDto } from './dto/update.dto';
import { MeetingDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('basic')
@ApiTags('Meeting')
@Controller('api/v/1/meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse()
  async list() {
    return await this.meetingService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse()
  async byId(@Query() data: MeetingGetByIdDto) {
    return await this.meetingService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse()
  async create(@Body() data: MeetingCreateDto) {
    return await this.meetingService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse()
  async update(@Body() data: MeetingUpdateDto) {
    return await this.meetingService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse()
  async delete(@Query() data: MeetingDeleteDto) {
    return await this.meetingService.delete(data);
  }
}
