import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { BoardToMemberService } from './boardToMember.service';
import { BoardToMemberGetByIdDto } from './dto/getById.dto';
import { BoardToMemberCreateDto } from './dto/create.dto';
import { BoardToMemberUpdateDto } from './dto/update.dto';
import { BoardToMemberDeleteDto } from './dto/delete.dto';

@Controller('api/v/1/board-to-member')
export class BoardToMemberController {
  constructor(private readonly boardToMemberService: BoardToMemberService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  async list() {
    return await this.boardToMemberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: BoardToMemberGetByIdDto) {
    return await this.boardToMemberService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  async create(@Body() data: BoardToMemberCreateDto) {
    return await this.boardToMemberService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  async update(@Body() data: BoardToMemberUpdateDto) {
    return await this.boardToMemberService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  async delete(@Query() data: BoardToMemberDeleteDto) {
    return await this.boardToMemberService.delete(data);
  }
}
