import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { LgaBoardCommitteeToMemberService } from './lgaBoardCommitteeToMember.service';
import { LgaBoardCommitteeToMemberGetByIdDto } from './dto/lgaBoardCommitteeToMember.getById.dto';
import { LgaBoardCommitteeToMemberCreateDto } from './dto/lgaBoardCommitteeToMember.create.dto';

@Controller('lga/board/committee/to/member')
export class LgaBoardCommitteeToMemberController {
  constructor(private readonly lgaBoardCommitteeToMemberService: LgaBoardCommitteeToMemberService) {}

  @Post('create')
  async create(@Body() data: LgaBoardCommitteeToMemberCreateDto) {
    return await this.lgaBoardCommitteeToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.lgaBoardCommitteeToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: LgaBoardCommitteeToMemberGetByIdDto) {
    return await this.lgaBoardCommitteeToMemberService.getById(data);
  }
}
