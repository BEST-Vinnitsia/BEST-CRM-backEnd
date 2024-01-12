import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipGetByIdDto } from './dto/membershipGetId.dto';
import { MembershipCreateDto } from './dto/membershipCreate.dto';
import { MembershipUpdateDto } from './dto/membershipUpdate.dto';
import { MembershipDeleteDto } from './dto/membershipDelete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('basic')
@ApiTags('Membership')
@Controller('api/v/1/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse()
  async list() {
    return await this.membershipService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse()
  async byId(@Query() data: MembershipGetByIdDto) {
    return await this.membershipService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse()
  async create(@Body() data: MembershipCreateDto) {
    return await this.membershipService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse()
  async update(@Body() data: MembershipUpdateDto) {
    return await this.membershipService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse()
  async delete(@Query() data: MembershipDeleteDto) {
    return await this.membershipService.delete(data);
  }
}
