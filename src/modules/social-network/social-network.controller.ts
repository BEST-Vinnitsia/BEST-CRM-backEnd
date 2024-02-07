import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { SocialNetwork } from './entity/social-network.entity';
import { SocialNetworkService } from './social-network.service';
import { SocialNetworkGetListDto } from './dto/get-list.dto';
import { SocialNetworkGetMainDto } from './dto/get-main.dto';
import { SocialNetworkCreateDtoArray } from './dto/create.dto';
import { SocialNetworkUpdateDtoArray } from './dto/update.dto';
import { SocialNetworkDeleteDto } from './dto/delete.dto';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Social network')
@Controller('api/v/1/social-network')
export class SocialNetworkController {
    constructor(private readonly socialNetworkService: SocialNetworkService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [SocialNetwork] })
    async getEmailList(@Query() data: SocialNetworkGetListDto) {
        return this.socialNetworkService.getListByMemberId(data);
    }

    @Get('main')
    @ApiCreatedResponse({ type: SocialNetwork })
    async getMainEmail(@Query() data: SocialNetworkGetMainDto) {
        return this.socialNetworkService.getMainByMemberId(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: SocialNetwork })
    async create(@Body() dto: SocialNetworkCreateDtoArray) {
        return await this.socialNetworkService.create(dto.socialNetworks);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: SocialNetwork })
    async update(@Body() dto: SocialNetworkUpdateDtoArray) {
        return await this.socialNetworkService.update(dto.socialNetworks);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('delete')
    @ApiCreatedResponse({ type: SocialNetwork })
    @UseFilters(HttpErrorFilter)
    async delete(@Body() dto: SocialNetworkDeleteDto) {
        return this.socialNetworkService.delete(dto.socialNetworksId);
    }
}
