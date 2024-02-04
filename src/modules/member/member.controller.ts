import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberCreateDto } from './dto/member-create.dto';
import { MemberGetByIdDto } from './dto/member-get-by-id.dto';
import { MemberUpdateDto } from './dto/member-update.dto';
import { MemberDeleteDto } from './dto/member-delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { MemberDto } from './dto/member.dto';
import { EmailDto } from './dto/email.dto';
import { EmailService } from './email.service';
import { EmailGetListDto } from './dto/email-get-list.dto';
import { EmailGetMainDto } from './dto/email-get-main.dto';
import { EmailCreateDto, EmailCreateDtoArray } from './dto/email-create.dto';
import { EmailUpdateDto, EmailUpdateDtoArray } from './dto/email-update.dto';
import { EmailDeleteDto } from './dto/email-delete.dto';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller('api/v/1/member')
export class MemberController {
    constructor(
        private readonly memberService: MemberService,
        private readonly emailService: EmailService,
    ) {}

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

    //
    // email
    //

    /* ----------------  GET  ---------------- */

    @Get('email/list')
    @ApiCreatedResponse({ type: [EmailDto] })
    async getEmailList(@Query() data: EmailGetListDto) {
        return await this.emailService.getListByMemberId(data);
    }

    @Get('email/main')
    @ApiCreatedResponse({ type: EmailDto })
    async getMainEmail(@Query() data: EmailGetMainDto) {
        return await this.emailService.getMainByMemberId(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('email/create')
    @ApiCreatedResponse({ type: EmailDto })
    async emailCreate(@Body() dto: EmailCreateDtoArray) {
        return await this.emailService.create(dto.emails);
    }

    /* ----------------  PUT  ---------------- */
    @Put('email/update')
    @ApiCreatedResponse({ type: EmailDto })
    async emailUpdate(@Body() dto: EmailUpdateDtoArray) {
        return await this.emailService.update(dto.emails);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('email/delete')
    @ApiCreatedResponse({ type: EmailDto })
    async emailDelete(@Body() dto: EmailDeleteDto) {
        return await this.emailService.delete(dto.emailsId);
    }
}
