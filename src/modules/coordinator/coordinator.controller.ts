import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorGetByIdDto } from './dto/get-by-id.dto';
import { CoordinatorCreateDto } from './dto/create.dto';
import { CoordinatorUpdateDto } from './dto/update.dto';
import { CoordinatorDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Coordinator } from './entity/coordinator.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Coordinator')
@Controller('api/v/1/coordinator')
export class CoordinatorController {
    constructor(private readonly boardService: CoordinatorService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Coordinator] })
    async list() {
        return await this.boardService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Coordinator })
    async byId(@Query() dto: CoordinatorGetByIdDto) {
        return await this.boardService.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Coordinator })
    async create(@Body() dto: CoordinatorCreateDto) {
        return await this.boardService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Coordinator })
    async update(@Body() dto: CoordinatorUpdateDto) {
        return await this.boardService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Coordinator })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: CoordinatorDeleteArrayDto) {
        return await this.boardService.delete(dto.coordinatorsId);
    }
}
