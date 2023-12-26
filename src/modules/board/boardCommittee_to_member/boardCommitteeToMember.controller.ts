import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { BoardCommitteeToMemberService } from './boardCommitteeToMember.service';
import { BoardCommitteeToMemberGetByIdDto } from './dto/boardCommitteeToMember.getById.dto';
import { BoardCommitteeToMemberCreateDto } from './dto/boardCommitteeToMember.create.dto';

@Controller('board/committee/to/member')
export class BoardCommitteeToMemberController {
  constructor(private readonly boardCommitteeToMemberService: BoardCommitteeToMemberService) {}

  @Post('create')
  async create(@Body() data: BoardCommitteeToMemberCreateDto) {
    return await this.boardCommitteeToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.boardCommitteeToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: BoardCommitteeToMemberGetByIdDto) {
    return await this.boardCommitteeToMemberService.getById(data);
  }
}
