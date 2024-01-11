import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberCreateDto } from './dto/memberCreate.dto';
import { MemberGetByIdDto } from './dto/memberGetById.dto';
import { MemberUpdateDto } from './dto/memberUpdate.dto';
import { MemberDeleteByIdDto } from './dto/memberDeleteById.dto';
import { MemberDeleteArrayByIdDto } from './dto/memberDeleteArrayById.dto';

@Controller('api/v/1/member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  async list() {
    return await this.memberService.getList();
  }

  @Get('by-id')
  async getById(@Query() data: MemberGetByIdDto) {
    return await this.memberService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  async create(@Body() data: MemberCreateDto) {
    return await this.memberService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('update')
  async update(@Body() data: MemberUpdateDto) {
    return await this.memberService.update(data);
  }

  /* ----------------  DELETE  ---------------- */

  @Delete('by-id')
  async deleteById(@Query() data: MemberDeleteByIdDto) {
    return await this.memberService.deleteById(data);
  }

  @Delete('array-by-id')
  async deleteArrayById(@Body() data: MemberDeleteArrayByIdDto) {
    return await this.memberService.deleteArrayById(data);
  }
}
