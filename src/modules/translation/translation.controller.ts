import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationGetByIdDto } from './dto/getById.dto';
import { TranslationCreateDto } from './dto/create.dto';
import { TranslationUpdateDto } from './dto/update.dto';
import { TranslationDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { TranslationDto } from './dto/translation.dto';

@ApiSecurity('basic')
@ApiTags('Translation')
@Controller('api/v/1/translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse({ type: [TranslationDto] })
  async list() {
    return await this.translationService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse({ type: TranslationDto })
  async byId(@Query() data: TranslationGetByIdDto) {
    return await this.translationService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse({ type: TranslationDto })
  async create(@Body() data: TranslationCreateDto) {
    return await this.translationService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse({ type: TranslationDto })
  async update(@Body() data: TranslationUpdateDto) {
    return await this.translationService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse({ type: TranslationDto })
  async delete(@Query() data: TranslationDeleteDto) {
    return await this.translationService.delete(data);
  }
}
