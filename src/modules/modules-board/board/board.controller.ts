import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Board } from './entity/board.entity';
import { Claim } from '../../../common/decorators';
import { BoardGuard } from '../../../common/guards';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { BoardService } from './board.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';

@ApiSecurity('basic')
@ApiTags('Board')
@Controller('api/v/1/board')
export class BoardController {
    constructor(private readonly service: BoardService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Board] })
    async list() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Board })
    async byId(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Board })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Board })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Board })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.service.delete(dto.boardsId);
    }
}
