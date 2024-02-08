import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { BoardToMemberService } from './board-to-member.service';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { BoardToMember } from './entity/board-to-member.entity';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { CreateDto, DeleteArrayDto, GetByBoardIdDto, GetByCadenceIdDto, GetByIdDto, GetByMemberIdDto, UpdateDto } from './dto';

@ApiSecurity('basic')
@ApiTags('Board to member')
@Controller('api/v/1/board-to-member')
export class BoardToMemberController {
    constructor(private readonly service: BoardToMemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [BoardToMember] })
    async getList() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-member-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getByMemberId(@Query() dto: GetByMemberIdDto) {
        return await this.service.getByMemberId(dto);
    }

    @Get('by-cadence-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getByCadenceId(@Query() dto: GetByCadenceIdDto) {
        return await this.service.getByCadenceId(dto);
    }

    @Get('by-board-id')
    @ApiCreatedResponse({ type: BoardToMember })
    async getByBoardId(@Query() dto: GetByBoardIdDto) {
        return await this.service.getByBoardId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: BoardToMember })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: BoardToMember })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: BoardToMember })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return await this.service.delete(dto.boardToMemberId);
    }
}
