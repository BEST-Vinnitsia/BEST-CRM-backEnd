import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { LgaBoardService } from './board.service';
import { LgaBoardGetByIdDto } from './dto/board.getById.dto';
import { LgaBoardCreateDto } from './dto/board.create.dto';

@Controller('lga/board')
export class LgaBoardController {
  constructor(private readonly lgaBoardService: LgaBoardService) {}

  @Post('create')
  async create(@Body() data: LgaBoardCreateDto) {
    return await this.lgaBoardService.create(data);
  }

  @Get('list')
  async list() {
    return await this.lgaBoardService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: LgaBoardGetByIdDto) {
    return await this.lgaBoardService.getById(data);
  }
}
