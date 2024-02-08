import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { CommitteeService } from './committee.service';
import { CommitteeGetByIdDto } from './dto/get-by-id.dto';
import { CommitteeCreateDto } from './dto/create.dto';
import { CommitteeUpdateDto } from './dto/update.dto';
import { CommitteeDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Committee } from './entity/committee.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Committee')
@Controller('api/v/1/committee')
export class CommitteeController {
    constructor(private readonly committeeService: CommitteeService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Committee] })
    async list() {
        return await this.committeeService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Committee })
    async byId(@Query() dto: CommitteeGetByIdDto) {
        return await this.committeeService.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Committee })
    async create(@Body() dto: CommitteeCreateDto) {
        return await this.committeeService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Committee })
    async update(@Body() dto: CommitteeUpdateDto) {
        return await this.committeeService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Committee })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: CommitteeDeleteArrayDto) {
        return await this.committeeService.delete(dto.committeesId);
    }
}
