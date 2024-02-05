import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { BoardToMemberService } from './board-to-member.service';
import { BoardToMemberGetByIdDto } from './dto/getById.dto';
import { BoardToMemberCreateDto } from './dto/create.dto';
import { BoardToMemberUpdateDto } from './dto/update.dto';
import { BoardToMemberDeleteArrayDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { BoardToMember } from './entity/board-to-member.entity';

@ApiSecurity('basic')
@ApiTags('Board to member')
@Controller('api/v/1/board-to-member')
export class BoardToMemberController {
    constructor(private readonly boardToMemberService: BoardToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [BoardToMember] })
    async list() {
        return await this.boardToMemberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async byId(@Query() dto: BoardToMemberGetByIdDto) {
        return await this.boardToMemberService.getById(dto);
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
    async delete(@Body() dto: BoardToMemberDeleteArrayDto) {
        return await this.boardToMemberService.delete(dto.boardToMemberId);
    }
}
