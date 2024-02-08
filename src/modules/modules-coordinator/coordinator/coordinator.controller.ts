import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Coordinator } from './entity/coordinator.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Coordinator')
@Controller('api/v/1/coordinator')
export class CoordinatorController {
    constructor(private readonly service: CoordinatorService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Coordinator] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Coordinator })
    async byId(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Coordinator })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Coordinator })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Coordinator })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.service.delete(dto.coordinatorsId);
    }
}
