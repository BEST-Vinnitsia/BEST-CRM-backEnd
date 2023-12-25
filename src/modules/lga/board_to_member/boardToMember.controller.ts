import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { LgaBoardToMemberService } from './boardToMember.service';
import { LgaBoardToMemberGetByIdDto } from './dto/boardToMember.getById.dto';
import { LgaBoardToMemberCreateDto } from './dto/boardToMember.create.dto';

@Controller('lga/board/to/member')
export class LgaBoardToMemberController {
  constructor(private readonly lgaBoardToMemberService: LgaBoardToMemberService) {}

  @Post('create')
  async create(@Body() data: LgaBoardToMemberCreateDto) {
    return await this.lgaBoardToMemberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.lgaBoardToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: LgaBoardToMemberGetByIdDto) {
    return await this.lgaBoardToMemberService.getById(data);
  }
}
