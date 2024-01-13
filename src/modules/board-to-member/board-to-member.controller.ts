import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { BoardToMemberService } from './board-to-member.service';
import { BoardToMemberGetByIdDto } from './dto/getById.dto';
import { BoardToMemberCreateDto } from './dto/create.dto';
import { BoardToMemberUpdateDto } from './dto/update.dto';
import { BoardToMemberDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { BoardToMemberDto } from './dto/board-to-member.dto';

@ApiSecurity('basic')
@ApiTags('Board to member')
@Controller('api/v/1/board-to-member')
export class BoardToMemberController {
  constructor(private readonly boardToMemberService: BoardToMemberService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse({ type: [BoardToMemberDto] })
  async list() {
    return await this.boardToMemberService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse({ type: BoardToMemberDto })
  async byId(@Query() data: BoardToMemberGetByIdDto) {
    return await this.boardToMemberService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse({ type: BoardToMemberDto })
  async create(@Body() data: BoardToMemberCreateDto) {
    return await this.boardToMemberService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse({ type: BoardToMemberDto })
  async update(@Body() data: BoardToMemberUpdateDto) {
    return await this.boardToMemberService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse({ type: BoardToMemberDto })
  async delete(@Query() data: BoardToMemberDeleteDto) {
    return await this.boardToMemberService.delete(data);
  }
}
