import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinatorToMember.service';
import { CoordinatorToMemberGetByIdDto } from './dto/lgaBoardToMember.getById.dto';
import { CoordinatorToMemberCreateDto } from './dto/lgaBoardToMember.create.dto';

@Controller('api/v/1/coordinator/to/member')
export class CoordinatorToMemberController {
  constructor(private readonly coordinatorToMemberService: CoordinatorToMemberService) {}

  @Post('create')
  async create(@Body() data: CoordinatorToMemberCreateDto) {
    return await this.coordinatorToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.coordinatorToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorToMemberGetByIdDto) {
    return await this.coordinatorToMemberService.getById(data);
  }
}
