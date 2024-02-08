import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateDto, DeleteArrayDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Member } from './entity/member.entity';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller('api/v/1/member')
export class MemberController {
    constructor(private readonly service: MemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Member] })
    async getList() {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Member })
    async getById(@Query() data: GetByIdDto) {
        return await this.service.getById(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Member })
    async create(@Body() data: CreateDto) {
        return await this.service.create(data);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Member })
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
