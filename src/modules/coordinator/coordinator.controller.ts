import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorGetByIdDto } from './dto/getById.dto';
import { CoordinatorCreateDto } from './dto/create.dto';
import { CoordinatorUpdateDto } from './dto/update.dto';
import { CoordinatorDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('basic')
@ApiTags('Coordinator')
@Controller('api/v/1/coordinator')
export class CoordinatorController {
  constructor(private readonly coordinatorService: CoordinatorService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse()
  async list() {
    return await this.coordinatorService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse()
  async byId(@Query() data: CoordinatorGetByIdDto) {
    return await this.coordinatorService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse()
  async create(@Body() data: CoordinatorCreateDto) {
    return await this.coordinatorService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse()
  async update(@Body() data: CoordinatorUpdateDto) {
    return await this.coordinatorService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse()
  async delete(@Query() data: CoordinatorDeleteDto) {
    return await this.coordinatorService.delete(data);
  }
}
