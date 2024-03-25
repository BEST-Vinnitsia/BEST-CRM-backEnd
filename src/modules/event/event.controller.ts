import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { v2 } from '../../constants/api-version';
import { EventCategoryCreateDto, EventCategoryDelete, EventCategoryDetailsDto, EventCategoryUpdateDto } from './dto/event.dto';

@ApiSecurity('basic')
@ApiTags('Event')
@Controller(`${v2}/event`)
export class EventController {
    constructor(private readonly service: EventService) {}

    /* ----------------  category  ---------------- */

    @Get('category/list')
    async getListCategory() {
        return await this.service.getListCategory();
    }

    @Get('category/details')
    async getDetailsCategory(@Query() dto: EventCategoryDetailsDto) {
        return await this.service.getDetailsCategory(dto);
    }

    @Post('category/create')
    async createCategory(@Body() dto: EventCategoryCreateDto) {
        return await this.service.createCategory(dto);
    }

    @Put('category/update')
    async updateCategory(@Body() dto: EventCategoryUpdateDto) {
        return await this.service.updateCategory(dto);
    }

    @Delete('category/delete')
    async deleteCategory(@Query() dto: EventCategoryDelete) {
        return this.service.deleteCategory(dto);
    }

    /* ----------------  POST  ---------------- */
    // @Claim(['demo'])
    // @UseGuards(BoardGuard)
    // @Post('')
    // @ApiCreatedResponse({ type: CreateEntity })
    // async create(@Body() dto: CreateDto): Promise<ICreateRes> {
    //     return await this.service.create(dto);
    // }

    /* ----------------  PUT  ---------------- */
    // @Put('')
    // @ApiCreatedResponse({ type: UpdateEntity })
    // async update(@Body() dto: UpdateDto): Promise<IUpdateRes> {
    //     return await this.service.update(dto);
    // }

    /* ----------------  DELETE  ---------------- */
    // @Delete('')
    // @ApiCreatedResponse({ type: DeleteEntity })
    // async deleteById(@Query() dto: DeleteDto): Promise<IDeleteRes> {
    //     return this.service.deleteById(dto);
    // }
    //
    // @Delete('delete-array')
    // @ApiCreatedResponse({ type: DeleteArrayEntity })
    // async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
    //     return this.service.deleteArray(dto.id);
    // }
}
