import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberCreateDto } from './dto/member.create.dto';
import { MemberGetByEmailDto } from './dto/member.getByEmail.dto';
import { MemberGetByIdDto } from './dto/member.getById.dto';

@UsePipes(new ValidationPipe())
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('list')
  async list() {
    return await this.memberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: MemberGetByIdDto) {
    return await this.memberService.getById(data);
  }

  @Get('by-email')
  async byEmail(@Query() data: MemberGetByEmailDto) {
    return await this.memberService.getByEmail(data);
  }

  @Post('create')
  async create(@Body() data: MemberCreateDto) {
    return await this.memberService.create(data);
  }
}
