import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { CadenceService } from './cadence.service';
import { CadenceGetByIdDto } from './dto/getById.dto';
import { CadenceCreateDto } from './dto/create.dto';
import { CadenceUpdateDto } from './dto/update.dto';
import { CadenceDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { CadenceDto } from './dto/cadence.dto';

@ApiSecurity('basic')
@ApiTags('Cadence')
@Controller('api/v/1/cadence')
export class CadenceController {
  constructor(private readonly cadenceService: CadenceService) {}

  /* ----------------  GET  ---------------- */

  @Get('by-id')
  @ApiCreatedResponse({ type: CadenceDto })
  async byId(@Query() data: CadenceGetByIdDto) {
    return await this.cadenceService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse({ type: CadenceDto })
  async create(@Body() data: CadenceCreateDto) {
    return await this.cadenceService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse({ type: CadenceDto })
  async update(@Body() data: CadenceUpdateDto) {
    return await this.cadenceService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse({ type: CadenceDto })
  async delete(@Query() data: CadenceDeleteDto) {
    return await this.cadenceService.delete(data);
  }
}
