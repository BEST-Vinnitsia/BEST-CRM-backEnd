import { Body, Controller, Get, Post, Query, Delete, Put, UseFilters } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { DeleteArrayDto } from './dto/delete-array.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { Member } from './entity/member.entity';
import { GetByIdDto } from './dto/get-by-id.dto';
import { HttpErrorFilter } from '../../common/filters/http-exception.filter';

@ApiSecurity('basic')
@ApiTags('Member')
@Controller('api/v/1/member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    /* ----------------  GET  ---------------- */

    @Get('list')
    @ApiCreatedResponse({ type: [Member] })
    async getList() {
        return await this.memberService.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: Member })
    async getById(@Query() data: GetByIdDto) {
        return await this.memberService.getById(data);
    }

    /* ----------------  POST  ---------------- */
    @Post('create')
    @ApiCreatedResponse({ type: Member })
    async create(@Body() data: CreateDto) {
        return await this.memberService.create(data);
    }

    /* ----------------  PUT  ---------------- */
    @Put('update')
    @ApiCreatedResponse({ type: Member })
    async update(@Body() data: UpdateDto) {
        return await this.memberService.update(data);
    }

    /* ----------------  DELETE  ---------------- */

    @Delete('delete')
    @ApiCreatedResponse()
    @UseFilters(HttpErrorFilter)
    async deleteArray(@Body() dto: DeleteArrayDto) {
        return this.memberService.deleteArray(dto.membersId);
    }
}
