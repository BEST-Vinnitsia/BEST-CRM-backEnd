import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MemberEntity } from './entity/member.entity';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';
import { MemberCreateWithAllInfoDto } from './dto/member.dto';
import { v1 } from '../../../constants/api-version';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller(`${v1}/member`)
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
    async getById(@Query() dto: GetByIdDto) {
        return await this.service.getById(dto);
    }

    @Get('by-id-all-info')
    @ApiCreatedResponse()
    async getByIdAllInfo(@Query() dto: GetByIdDto) {
        return await this.service.getByIdAllInfo(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: MemberEntity })
    async create(@Body() dto: CreateDto) {
        return await this.service.create(dto);
    }

    @Post('create-with-all-info')
    @ApiCreatedResponse()
    async createWithAllInfo(@Body() dto: MemberCreateWithAllInfoDto) {
        return await this.service.createWithAllInfo(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: MemberEntity })
    async update(@Body() dto: UpdateDto) {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */

    @Delete('delete')
    @ApiCreatedResponse()
    @UseFilters(HttpErrorFilter)
    async deleteArray(@Body() dto: DeleteArrayDto) {
        return this.service.deleteArray(dto.membersId);
    }
}
