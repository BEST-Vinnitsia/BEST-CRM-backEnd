import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { LgaService } from './lga.service';
import { LgaGetByIdDto } from './dto/lga.getById.dto';
import { LgaCreateDto } from './dto/lga.create.dto';

@Controller('lga')
export class LgaController {
  constructor(private readonly lgaService: LgaService) {}

  @Post('create')
  async create(@Body() data: LgaCreateDto) {
    return await this.lgaService.create(data);
  }

  @Get('list')
  async list() {
    return await this.lgaService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: LgaGetByIdDto) {
    return await this.lgaService.getById(data);
  }
}
