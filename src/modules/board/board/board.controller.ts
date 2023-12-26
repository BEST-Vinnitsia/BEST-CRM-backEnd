import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardGetByIdDto } from './dto/board.getById.dto';
import { BoardCreateDto } from './dto/board.create.dto';

@Controller('api/v/1/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('create')
  async create(@Body() data: BoardCreateDto) {
    return await this.boardService.create(data);
  }

  @Get('list')
  async list() {
    return await this.boardService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: BoardGetByIdDto) {
    return await this.boardService.getById(data);
  }
}
