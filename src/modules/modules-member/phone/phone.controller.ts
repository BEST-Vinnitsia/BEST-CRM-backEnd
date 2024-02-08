import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Phone } from './entity/phone.entity';
import { PhoneService } from './phone.service';
import { PhoneGetListDto } from './dto/get-list.dto';
import { PhoneGetMainDto } from './dto/get-main.dto';
import { PhoneCreateDtoArray } from './dto/create.dto';
import { PhoneUpdateDtoArray } from './dto/update.dto';
import { PhoneDeleteDto } from './dto/delete.dto';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Phone')
@Controller('api/v/1/phone')
export class PhoneController {
    constructor(private readonly phoneService: PhoneService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Phone] })
    async getEmailList(@Query() data: PhoneGetListDto) {
        return this.phoneService.getListByMemberId(data);
    }

    @Get('main')
    @ApiCreatedResponse({ type: Phone })
    async getMainEmail(@Query() data: PhoneGetMainDto) {
        return this.phoneService.getMainByMemberId(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Phone })
    async create(@Body() dto: PhoneCreateDtoArray) {
        return await this.phoneService.create(dto.phones);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Phone })
    async update(@Body() dto: PhoneUpdateDtoArray) {
        return await this.phoneService.update(dto.phones);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Phone })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: PhoneDeleteDto) {
        return this.phoneService.delete(dto.phonesId);
    }
}
