import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateDto, DeleteArrayDto, DeleteDto, GetByIdDto, UpdateDto } from './dto';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { v1 } from '../../../constants/api-version';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { CreateEntity, DeleteArrayEntity, DeleteEntity, GetByIdEntity, GetListEntity, UpdateEntity } from './entity';

interface IMemberController {
    getList(): Promise<IGetListRes[]>;

    getById(dto: GetByIdDto): Promise<IGetByIdRes>;

    create(dto: CreateDto): Promise<ICreateRes>;

    update(dto: UpdateDto): Promise<IUpdateRes>;

    deleteById(dto: DeleteDto): Promise<IDeleteRes>;

    deleteArray(dto: DeleteArrayDto): Promise<IDeleteArrayRes>;
}

@ApiSecurity('basic')
@ApiTags('Member')
@Controller(`${v1}/member`)
export class MemberController implements IMemberController {
    constructor(private readonly service: MemberService) {}

    /* ----------------  GET  ---------------- */
    @Get('list')
    @ApiCreatedResponse({ type: [GetListEntity] })
    public async getList(): Promise<IGetListRes[]> {
        return await this.service.getList();
    }

    @Get('by-id')
    @ApiCreatedResponse({ type: GetByIdEntity })
    public async getById(@Query() dto: GetByIdDto): Promise<IGetByIdRes> {
        return await this.service.getById(dto);
    }

    /* ----------------  POST  ---------------- */
    @Post('')
    @ApiCreatedResponse({ type: CreateEntity })
    public async create(@Body() dto: CreateDto): Promise<ICreateRes> {
        return await this.service.create(dto);
    }

    /* ----------------  PUT  ---------------- */
    @Put('')
    @ApiCreatedResponse({ type: UpdateEntity })
    public async update(@Body() dto: UpdateDto): Promise<IUpdateRes> {
        return await this.service.update(dto);
    }

    /* ----------------  DELETE  ---------------- */
    @Delete('by-id')
    @ApiCreatedResponse({ type: DeleteEntity })
    public async deleteById(@Query() dto: DeleteDto): Promise<IDeleteRes> {
        return await this.service.deleteById(dto);
    }

    @Delete('delete-array')
    @ApiCreatedResponse({ type: DeleteArrayEntity })
    public async deleteArray(@Body() dto: DeleteArrayDto): Promise<IDeleteArrayRes> {
        return await this.service.deleteArray(dto.id);
    }
}
