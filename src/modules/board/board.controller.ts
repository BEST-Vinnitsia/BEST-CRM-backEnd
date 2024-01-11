import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardGetByIdDto } from './dto/getById.dto';
import { BoardCreateDto } from './dto/create.dto';
import { BoardUpdateDto } from './dto/update.dto';
import { BoardDeleteDto } from './dto/delete.dto';

@Controller('api/v/1/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  async list() {
    return await this.boardService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: BoardGetByIdDto) {
    return await this.boardService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  async create(@Body() data: BoardCreateDto) {
    return await this.boardService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  async update(@Body() data: BoardUpdateDto) {
    return await this.boardService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  async delete(@Query() data: BoardDeleteDto) {
    return await this.boardService.delete(data);
  }
}
