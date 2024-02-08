import { Body, Controller, Get, Post, Query, Delete, Put, UseGuards, UseFilters } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardGetByIdDto } from './dto/get-by-id.dto';
import { BoardCreateDto } from './dto/create.dto';
import { BoardUpdateDto } from './dto/update.dto';
import { BoardDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Board } from './entity/board.entity';
import { Claim } from 'src/common/decorators';
import { BoardGuard } from 'src/common/guards';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Board')
@Controller('api/v/1/board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Board] })
    async list() {
        return await this.boardService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Board })
    async byId(@Query() dto: BoardGetByIdDto) {
        return await this.boardService.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Claim(['demo'])
    @UseGuards(BoardGuard)
    @Post('create')
    @ApiCreatedResponse({ type: Board })
    async create(@Body() dto: BoardCreateDto) {
        return await this.boardService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Board })
    async update(@Body() dto: BoardUpdateDto) {
        return await this.boardService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Board })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: BoardDeleteArrayDto) {
        return await this.boardService.delete(dto.boardsId);
    }
}
