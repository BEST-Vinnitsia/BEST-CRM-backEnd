import { Body, Controller, Delete, Get, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { SocialNetwork } from './entity/social-network.entity';
import { SocialNetworkService } from './social-network.service';
import { CreateArrayDto, DeleteArrayDto, GetListDto, GetMainDto, UpdateArrayDto } from './dto';
import { HttpErrorFilter } from '../../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Social network')
@Controller('api/v/1/social-network')
export class SocialNetworkController {
    constructor(private readonly service: SocialNetworkService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [SocialNetwork] })
    async getEmailList(@Query() dto: GetListDto) {
        return this.service.getListByMemberId(dto);
    }

    @Get('main')
    @ApiCreatedResponse({ type: SocialNetwork })
    async getMainEmail(@Query() dto: GetMainDto) {
        return this.service.getMainByMemberId(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: SocialNetwork })
    async create(@Body() dto: CreateArrayDto) {
        return await this.service.create(dto.socialNetworks);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: SocialNetwork })
    async update(@Body() dto: UpdateArrayDto) {
        return await this.service.update(dto.socialNetworks);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: SocialNetwork })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: DeleteArrayDto) {
        return this.service.delete(dto.socialNetworksId);
    }
}
