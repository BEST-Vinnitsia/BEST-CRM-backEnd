import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Email } from './entity/email.entity';
import { EmailService } from './email.service';
import { CreateArrayDto, DeleteArrayDto, GetListDto, GetMainDto, UpdateArrayDto } from './dto';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Email')
@Controller('api/v/1/email')
export class EmailController {
    constructor(private readonly service: EmailService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Email] })
    async getEmailList(@Query() data: GetListDto) {
        return this.service.getListByMemberId(data);
    }

    @Get('main')
    @ApiCreatedResponse({ type: Email })
    async getMainEmail(@Query() data: GetMainDto) {
        return this.service.getMainByMemberId(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Email })
    async create(@Body() dto: CreateArrayDto) {
        return await this.service.create(dto.emails);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Email })
    async update(@Body() dto: UpdateArrayDto) {
        return await this.service.update(dto.emails);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Email })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.emailsId);
    }
}
