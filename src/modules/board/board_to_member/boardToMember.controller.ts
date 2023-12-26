import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { BoardToMemberService } from './boardToMember.service';
import { BoardToMemberGetByIdDto } from './dto/boardToMember.getById.dto';
import { BoardToMemberCreateDto } from './dto/boardToMember.create.dto';

@Controller('api/v/1/board/to/member')
export class BoardToMemberController {
  constructor(private readonly BoardToMemberService: BoardToMemberService) {}

  @Post('create')
  async create(@Body() data: BoardToMemberCreateDto) {
    return await this.BoardToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.BoardToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: BoardToMemberGetByIdDto) {
    return await this.BoardToMemberService.getById(data);
  }
}
