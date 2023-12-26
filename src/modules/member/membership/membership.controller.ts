import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipGetByIdDto } from './dto/membership.getById.dto';
import { MembershipCreateDto } from './dto/membership.create.dto';

@Controller('api/v/1/member/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post('create')
  async create(@Body() data: MembershipCreateDto) {
    return await this.membershipService.create(data);
  }

  @Get('list')
  async list() {
    return await this.membershipService.getList();
  }
  
  @Get('by-id')
  async byId(@Query() data: MembershipGetByIdDto) {
    return await this.membershipService.getById(data);
  }
}
