import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { Membership_GetById_Dto } from './dto/membership.getById.dto';
import { Membership_Create_Dto } from './dto/membership.create.dto';

@Controller('api/v/1/member/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post('create')
  async create(@Body() data: Membership_Create_Dto) {
    return await this.membershipService.create(data);
  }

  @Get('list')
  async list() {
    return await this.membershipService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: Membership_GetById_Dto) {
    return await this.membershipService.getById(data);
  }
}
