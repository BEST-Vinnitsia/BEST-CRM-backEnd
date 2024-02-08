import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { BoardToMemberService } from './board-to-member.service';
import { BoardToMemberGetByIdDto } from './dto/get-by-id.dto';
import { BoardToMemberCreateDto } from './dto/create.dto';
import { BoardToMemberUpdateDto } from './dto/update.dto';
import { BoardToMemberDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { BoardToMember } from './entity/board-to-member.entity';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';
import { BoardToMemberGetByCadenceIdDto } from './dto/get-by-cadence-id.dto';
import { BoardToMemberGetByBoardIdDto } from './dto/get-by-board-id.dto';
import { BoardToMemberGetByMemberIdDto } from './dto/get-by-member-id.dto';

@ApiSecurity('basic')
@ApiTags('Board to member')
@Controller('api/v/1/board-to-member')
export class BoardToMemberController {
    constructor(private readonly boardToMemberService: BoardToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [BoardToMember] })
    async getList() {
        return await this.boardToMemberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getById(@Query() dto: BoardToMemberGetByIdDto) {
        return await this.boardToMemberService.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getByMemberId(@Query() dto: BoardToMemberGetByMemberIdDto) {
        return await this.boardToMemberService.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getByCadenceId(@Query() dto: BoardToMemberGetByCadenceIdDto) {
        return await this.boardToMemberService.getByCadenceId(dto);
    }

    @Get('by-board-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getByBoardId(@Query() dto: BoardToMemberGetByBoardIdDto) {
        return await this.boardToMemberService.getByBoardId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: BoardToMember })
    async create(@Body() dto: BoardToMemberCreateDto) {
        return await this.boardToMemberService.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: BoardToMember })
    async update(@Body() dto: BoardToMemberUpdateDto) {
        return await this.boardToMemberService.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: BoardToMember })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: BoardToMemberDeleteArrayDto) {
        return await this.boardToMemberService.delete(dto.boardToMemberId);
    }
}
