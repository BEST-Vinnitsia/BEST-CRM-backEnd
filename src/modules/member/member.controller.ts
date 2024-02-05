import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberCreateDto } from './dto/member-create.dto';
import { MemberUpdateDto } from './dto/member-update.dto';
import { MemberDeleteDto } from './dto/member-delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { MemberDto } from './dto/member.dto';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller('api/v/1/member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [MemberDto] })
    async list() {
        return await this.memberService.getList();
    }

    // @Get('by-id')
    // @ApiCreatedResponse({ type: MemberDto })
    // async getById(@Query() data: MemberGetByIdDto) {
    //     return await this.memberService.getById(data);
    // }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: MemberDto })
    async create(@Body() data: MemberCreateDto) {
        return await this.memberService.create(data);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: MemberDto })
    async update(@Body() data: MemberUpdateDto) {
        return await this.memberService.update(data);
    }

    /* ----------------  DELETE  ---------------- */

    @Delete('by-id')
    @ApiCreatedResponse({ type: MemberDto })
    async delete(@Query() data: MemberDeleteDto) {
        return await this.memberService.deleteById(data);
    }
}
