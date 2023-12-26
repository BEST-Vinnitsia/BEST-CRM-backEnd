import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CadenceService } from './cadence.service';
import { CadenceGetByIdDto } from './dto/cadence.getById.dto';
import { CadenceCreateDto } from './dto/cadence.create.dto';

@Controller('lga/cadence')
export class CadenceController {
  constructor(private readonly cadenceService: CadenceService) {}

  @Post('create')
  async create(@Body() data: CadenceCreateDto) {
    return await this.cadenceService.create(data);
  }

  @Get('list')
  async list() {
    return await this.cadenceService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: CadenceGetByIdDto) {
    return await this.cadenceService.getById(data);
  }
}
