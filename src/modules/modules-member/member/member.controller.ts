import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MemberEntity } from './entity/member.entity';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller('api/v/1/member')
export class MemberController {
    constructor(private readonly service: MemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [MemberEntity] })
    async getList() {
        return await this.service.getList();
    }

    @Get('list-all-info')
    @ApiCreatedResponse()
    async getListAllInfo() {
        return await this.service.getListAllInfo();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: MemberEntity })
    async getById(@Query() data: GetByIdDto) {
        return await this.service.getById(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: MemberEntity })
    async create(@Body() data: CreateDto) {
        return await this.service.create(data);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: MemberEntity })
    async update(@Body() data: UpdateDto) {
        return await this.service.update(data);
    }

    /* ----------------  DELETE  ---------------- */

    @Delete('delete')
    @ApiCreatedResponse()
    @UseFilters(HttpErrorFilter)
    async deleteArray(@Body() dto: DeleteArrayDto) {
        return this.service.deleteArray(dto.membersId);
    }
}
