import { Body, Controller, Get, Post, Query, Delete, Put, InternalServerErrorException, Catch, HttpException, UseFilters } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberCreateDto } from './dto/member-create.dto';
import { MemberUpdateDto } from './dto/member-update.dto';
import { MemberDeleteArrayDto } from './dto/member-delete-array.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Member } from './entity/member.entity';
import { MemberGetByIdDto } from './dto/member-get-by-id.dto';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller('api/v/1/member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Member] })
    async getList() {
        return await this.memberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Member })
    async getById(@Query() data: MemberGetByIdDto) {
        return await this.memberService.getById(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Member })
    async create(@Body() data: MemberCreateDto) {
        return await this.memberService.create(data);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Member })
    async update(@Body() data: MemberUpdateDto) {
        return await this.memberService.update(data);
    }

    /* ----------------  DELETE  ---------------- */

    @Delete('delete')
    @ApiCreatedResponse()
    async deleteArray(@Body() dto: MemberDeleteArrayDto) {
        return this.memberService.deleteArray(dto.membersId);
    }
}
