import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CadenceService } from './cadence.service';
import { Cadence_GetById_Dto } from './dto/cadence.getById.dto';
import { Cadence_Create_Dto } from './dto/cadence.create.dto';

@Controller('api/v/1/meeting/cadence')
export class CadenceController {
  constructor(private readonly cadenceService: CadenceService) {}

  @Post('create')
  async create(@Body() data: Cadence_Create_Dto) {
    return await this.cadenceService.create(data);
  }

  @Get('list')
  async list() {
    return await this.cadenceService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: Cadence_GetById_Dto) {
    return await this.cadenceService.getById(data);
  }
}
