import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorCommitteeToMemberService } from './coordinatorCommitteeToMember.service';
import { CoordinatorCommitteeToMember_GetById_Dto } from './dto/coordinatorCommitteeToMember.getById.dto';
import { CoordinatorCommitteeToMember_Create_Dto } from './dto/coordinatorCommitteeToMember.create.dto';
import { CoordinatorCommitteeToMember_GetListByCadenceId_Dto } from './dto/coordinatorCommitteeToMember.getById.dto copy';

@Controller('api/v/1/coordinator/committee/to/member')
export class CoordinatorCommitteeToMemberController {
  constructor(private readonly coordinatorCommitteeToMemberService: CoordinatorCommitteeToMemberService) {}

  @Post('create')
  async create(@Body() data: CoordinatorCommitteeToMember_Create_Dto) {
    return await this.coordinatorCommitteeToMemberService.create(data);
  }

  @Get('list')
  async list(@Query() data: CoordinatorCommitteeToMember_GetListByCadenceId_Dto) {
    return await this.coordinatorCommitteeToMemberService.getListByCadenceId(data);
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorCommitteeToMember_GetById_Dto) {
    return await this.coordinatorCommitteeToMemberService.getById(data);
  }
}
