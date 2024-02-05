import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { CadenceService } from './cadence.service';
import { CadenceGetByIdDto } from './dto/getById.dto';
import { CadenceCreateDto } from './dto/create.dto';
import { CadenceUpdateDto } from './dto/update.dto';
import { CadenceDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Cadence } from './entity/cadence.entity';

@ApiSecurity('basic')
@ApiTags('Cadence')
@Controller('api/v/1/cadence')
export class CadenceController {
    constructor(private readonly cadenceService: CadenceService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Cadence] })
    async getList() {
        return await this.cadenceService.list();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Cadence })
    async getById(@Query() dto: CadenceGetByIdDto) {
        return await this.cadenceService.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Cadence })
    async create(@Body() dto: CadenceCreateDto) {
        return await this.cadenceService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Cadence })
    async update(@Body() dto: CadenceUpdateDto) {
        return await this.cadenceService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Cadence })
    async delete(@Body() dto: CadenceDeleteArrayDto) {
        return await this.cadenceService.delete(dto.cadencesId);
    }
}
