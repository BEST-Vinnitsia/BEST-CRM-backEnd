import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { CommitteeService } from './committee.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Committee } from './entity/committee.entity';
import { Claim } from '../../../common/decorators';
import { BoardGuard } from '../../../common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Committee')
@Controller(`${v1}/committee`)
export class CommitteeController {
    constructor(private readonly service: CommitteeService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Committee] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Committee })
    async byId(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-id-all-info')
    @ApiCreatedResponse({ type: Committee })
    async byIdAllInfo(@Query() dto: GetByIdDto) {
        return await this.service.byIdAllInfo(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Committee })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Committee })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Committee })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.service.delete(dto.committeesId);
    }
}
