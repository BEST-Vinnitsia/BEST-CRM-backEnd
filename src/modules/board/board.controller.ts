import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardGetByIdDto } from './dto/getById.dto';
import { BoardCreateDto } from './dto/create.dto';
import { BoardUpdateDto } from './dto/update.dto';
import { BoardDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { BoardDto } from './dto/board.dto';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';

@ApiSecurity('basic')
@ApiTags('Board')
@Controller('api/v/1/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse({ type: [BoardDto] })
  async list() {
    return await this.boardService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse({ type: BoardDto })
  async byId(@Query() data: BoardGetByIdDto) {
    return await this.boardService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Claim(['demo'])
  @UseGuards(BoardGuard)
  @Post('create')
  @ApiCreatedResponse({ type: BoardDto })
  async create(@Body() data: BoardCreateDto) {
    return await this.boardService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse({ type: BoardDto })
  async update(@Body() data: BoardUpdateDto) {
    return await this.boardService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse({ type: BoardDto })
  async delete(@Query() data: BoardDeleteDto) {
    return await this.boardService.delete(data);
  }
}
