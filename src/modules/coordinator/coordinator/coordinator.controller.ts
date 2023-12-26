import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorGetByIdDto } from './dto/coordinator.getById.dto';
import { CoordinatorCreateDto } from './dto/coordinator.create.dto';

@Controller('coordinator')
export class CoordinatorController {
  constructor(private readonly coordinatorService: CoordinatorService) {}

  @Post('create')
  async create(@Body() data: CoordinatorCreateDto) {
    return await this.coordinatorService.create(data);
  }

  @Get('list')
  async list() {
    return await this.coordinatorService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: CoordinatorGetByIdDto) {
    return await this.coordinatorService.getById(data);
  }
}
