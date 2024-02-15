import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { CadenceService } from './cadence.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Cadence } from './entity/cadence.entity';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';
import { v1 } from '../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Cadence')
@Controller(`${v1}/cadence`)
export class CadenceController {
    constructor(private readonly service: CadenceService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Cadence] })
    async getList() {
        return await this.service.list();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Cadence })
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Cadence })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Cadence })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Cadence })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.service.delete(dto.cadencesId);
    }
}
