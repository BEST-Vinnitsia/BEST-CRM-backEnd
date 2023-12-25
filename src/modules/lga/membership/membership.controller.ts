import { Controller, Get, Query } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipGetByIdDto } from './dto/membership.getById.dto';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get('list')
  async list() {
    return await this.membershipService.getList();
  }
  
  @Get('by-id')
  async byId(@Query() data: MembershipGetByIdDto) {
    return await this.membershipService.getById(data);
  }
}
