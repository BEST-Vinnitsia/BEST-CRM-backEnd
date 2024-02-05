import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Email } from './entity/email.entity';
import { EmailService } from './email.service';
import { GetListDto } from './dto/get-list.dto';
import { GetMainDto } from './dto/get-main.dto';
import { EmailCreateDtoArray } from './dto/create.dto';
import { EmailUpdateDtoArray } from './dto/update.dto';
import { DeleteDto } from './dto/delete.dto';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Email')
@Controller('api/v/1/email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Email] })
    async getEmailList(@Query() data: GetListDto) {
        return this.emailService.getListByMemberId(data);
    }

    @Get('main')
    @ApiCreatedResponse({ type: Email })
    async getMainEmail(@Query() data: GetMainDto) {
        return this.emailService.getMainByMemberId(data);
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
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteDto) {
        return this.emailService.delete(dto.emailsId);
    }
}
