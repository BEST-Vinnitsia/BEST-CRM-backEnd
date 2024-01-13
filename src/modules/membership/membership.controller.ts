import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipGetByIdDto } from './dto/getId.dto';
import { MembershipCreateDto } from './dto/create.dto';
import { MembershipUpdateDto } from './dto/update.dto';
import { MembershipDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { MembershipDto } from './dto/membership.dto';

@ApiSecurity('basic')
@ApiTags('Membership')
@Controller('api/v/1/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse({ type: [MembershipDto] })
  async list() {
    return await this.membershipService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse({ type: MembershipDto })
  async byId(@Query() data: MembershipGetByIdDto) {
    return await this.membershipService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse({ type: MembershipDto })
  async create(@Body() data: MembershipCreateDto) {
    return await this.membershipService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse({ type: MembershipDto })
  async update(@Body() data: MembershipUpdateDto) {
    return await this.membershipService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse({ type: MembershipDto })
  async delete(@Query() data: MembershipDeleteDto) {
    return await this.membershipService.delete(data);
  }
}
