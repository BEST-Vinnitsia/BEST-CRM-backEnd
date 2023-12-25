import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorCommitteeToMemberService } from './coordinatorCommitteeToMember.service';
import { CoordinatorCommitteeToMemberGetByIdDto } from './dto/coordinatorCommitteeToMember.getById.dto';
import { CoordinatorCommitteeToMemberCreateDto } from './dto/coordinatorCommitteeToMember.create.dto';

@Controller('lga/coordinator/committee/to/member')
export class CoordinatorCommitteeToMemberController {
  constructor(private readonly coordinatorCommitteeToMemberService: CoordinatorCommitteeToMemberService) {}

  @Post('create')
  async create(@Body() data: CoordinatorCommitteeToMemberCreateDto) {
    return await this.coordinatorCommitteeToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.coordinatorCommitteeToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorCommitteeToMemberGetByIdDto) {
    return await this.coordinatorCommitteeToMemberService.getById(data);
  }
}
