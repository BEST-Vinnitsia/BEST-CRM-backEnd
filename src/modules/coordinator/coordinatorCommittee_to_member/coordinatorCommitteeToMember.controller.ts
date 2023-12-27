import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorCommitteeToMemberService } from './coordinatorCommitteeToMember.service';
import { CoordinatorCommitteeToMember_GetById_Dto } from './dto/coordinatorCommitteeToMember.getById.dto';
import { CoordinatorCommitteeToMember_Create_Dto } from './dto/coordinatorCommitteeToMember.create.dto';

@Controller('api/v/1/coordinator/committee/to/member')
export class CoordinatorCommitteeToMemberController {
  constructor(private readonly coordinatorCommitteeToMemberService: CoordinatorCommitteeToMemberService) {}

  @Post('create')
  async create(@Body() data: CoordinatorCommitteeToMember_Create_Dto) {
    return await this.coordinatorCommitteeToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.coordinatorCommitteeToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorCommitteeToMember_GetById_Dto) {
    return await this.coordinatorCommitteeToMemberService.getById(data);
  }
}
