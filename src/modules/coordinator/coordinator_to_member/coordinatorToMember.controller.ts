import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinatorToMember.service';
import { CoordinatorToMember_GetById_Dto } from './dto/lgaBoardToMember.getById.dto';
import { CoordinatorToMember_Create_Dto } from './dto/lgaBoardToMember.create.dto';

@Controller('api/v/1/coordinator/to/member')
export class CoordinatorToMemberController {
  constructor(private readonly coordinatorToMemberService: CoordinatorToMemberService) {}

  @Post('create')
  async create(@Body() data: CoordinatorToMember_Create_Dto) {
    return await this.coordinatorToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.coordinatorToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorToMember_GetById_Dto) {
    return await this.coordinatorToMemberService.getById(data);
  }
}
