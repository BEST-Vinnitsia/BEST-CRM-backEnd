import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { Coordinator_GetById_Dto } from './dto/coordinator.getById.dto';
import { Coordinator_Create_Dto } from './dto/coordinator.create.dto';

@Controller('api/v/1/coordinator')
export class CoordinatorController {
  constructor(private readonly coordinatorService: CoordinatorService) {}

  @Post('create')
  async create(@Body() data: Coordinator_Create_Dto) {
    return await this.coordinatorService.create(data);
  }

  @Get('list')
  async list() {
    return await this.coordinatorService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: Coordinator_GetById_Dto) {
    return await this.coordinatorService.getById(data);
  }
}
