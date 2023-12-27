import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { Translation_GetById_Dto } from './dto/translation.getById.dto';
import { Translation_Create_Dto } from './dto/translation.create.dto';

@Controller('api/v/1/meeting/translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post('create')
  async create(@Body() data: Translation_Create_Dto) {
    return await this.translationService.create(data);
  }

  @Get('list')
  async list() {
    return await this.translationService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: Translation_GetById_Dto) {
    return await this.translationService.getById(data);
  }
}
