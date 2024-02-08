import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Phone } from './entity/phone.entity';
import { PhoneService } from './phone.service';
import { CreateArrayDto, DeleteArrayDto, GetListDto, GetMainDto, UpdateArrayDto } from './dto';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Phone')
@Controller('api/v/1/phone')
export class PhoneController {
    constructor(private readonly service: PhoneService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Phone] })
    async getEmailList(@Query() dto: GetListDto) {
        return this.service.getListByMemberId(dto);
    }

    @Get('main')
    @ApiCreatedResponse({ type: Phone })
    async getMainEmail(@Query() dto: GetMainDto) {
        return this.service.getMainByMemberId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Phone })
    async create(@Body() dto: CreateArrayDto) {
        return await this.service.create(dto.phones);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Phone })
    async update(@Body() dto: UpdateArrayDto) {
        return await this.service.update(dto.phones);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: Phone })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.phonesId);
    }
}
