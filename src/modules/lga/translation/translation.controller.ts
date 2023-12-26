import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationGetByIdDto } from './dto/translation.getById.dto';
import { TranslationCreateDto } from './dto/translation.create.dto';

@Controller('meeting/lga/translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post('create')
  async create(@Body() data: TranslationCreateDto) {
    return await this.translationService.create(data);
  }

  @Get('list')
  async list() {
    return await this.translationService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: TranslationGetByIdDto) {
    return await this.translationService.getById(data);
  }
}
