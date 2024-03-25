import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { GoogleDriveService } from './google-drive.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { v2 } from '../../constants/api-version';
import { EventCategoryCreateDto, EventCategoryDelete, EventCategoryDetailsDto, EventCategoryUpdateDto } from './dto/google-drive.dto';

@ApiSecurity('basic')
@ApiTags('Store')
@Controller(`${v2}/store`)
export class GoogleDriveController {
    constructor(private readonly service: GoogleDriveService) {}

    @Get('list')
    async getList() {
        return await this.service.getList();
    }

    @Get('by-id')
    async getById(@Query() dto: EventCategoryDetailsDto) {
        return await this.service.getById(dto);
    }

    @Post('add')
    async add(@Body() dto: EventCategoryCreateDto) {
        return await this.service.add(dto);
    }

    @Put('update')
    async update(@Body() dto: EventCategoryUpdateDto) {
        return await this.service.update(dto);
    }

    @Delete('delete')
    async delete(@Query() dto: EventCategoryDelete) {
        return this.service.delete(dto);
    }
}
