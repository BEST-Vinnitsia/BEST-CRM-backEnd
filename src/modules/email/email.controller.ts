import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Email } from './entity/email.entity';
import { EmailService } from './email.service';
import { EmailGetListDto } from './dto/email-get-list.dto';
import { EmailGetMainDto } from './dto/email-get-main.dto';
import { EmailCreateDtoArray } from './dto/email-create.dto';
import { EmailUpdateDtoArray } from './dto/email-update.dto';
import { EmailDeleteDto } from './dto/email-delete.dto';

@ApiSecurity('basic')
@ApiTags('Email')
@Controller('api/v/1/email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Email] })
    async getEmailList(@Query() data: EmailGetListDto) {
        return await this.emailService.getListByMemberId(data);
    }

    @Get('main')
    @ApiCreatedResponse({ type: Email })
    async getMainEmail(@Query() data: EmailGetMainDto) {
        return await this.emailService.getMainByMemberId(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Email })
    async create(@Body() dto: EmailCreateDtoArray) {
        return await this.emailService.create(dto.emails);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Email })
    async update(@Body() dto: EmailUpdateDtoArray) {
        return await this.emailService.update(dto.emails);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Email })
    async delete(@Body() dto: EmailDeleteDto) {
        return await this.emailService.delete(dto.emailsId);
    }
}
