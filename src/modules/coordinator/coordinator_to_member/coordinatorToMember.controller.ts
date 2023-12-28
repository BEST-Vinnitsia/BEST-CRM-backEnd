import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinatorToMember.service';
import { CoordinatorToMember_GetById_Dto } from './dto/lgaBoardToMember.getById.dto';
import { CoordinatorToMember_Create_Dto } from './dto/lgaBoardToMember.create.dto';
import { CoordinatorToMember_List_Dto } from './dto/lgaBoardToMember.list.dto';
import { CoordinatorToMember_AllList_Dto } from './dto/lgaBoardToMember.allList.dto';

@Controller('api/v/1/coordinator/to/member')
export class CoordinatorToMemberController {
  constructor(private readonly coordinatorToMemberService: CoordinatorToMemberService) {}

  @Post('create')
  async create(@Body() data: CoordinatorToMember_Create_Dto) {
    return await this.coordinatorToMemberService.create(data);
  }

  @Get('committee/list')
  async list(@Query() data: CoordinatorToMember_List_Dto) {
    return await this.coordinatorToMemberService.getList(data);
  }

  @Get('all-committees/list')
  async allList(@Query() data: CoordinatorToMember_AllList_Dto) {
    return await this.coordinatorToMemberService.getAllList(data);
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorToMember_GetById_Dto) {
    return await this.coordinatorToMemberService.getById(data);
  }
}
