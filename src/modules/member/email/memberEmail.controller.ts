import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberEmailService } from './memberEmail.service';
import { MemberEmailCreateDto } from './dto/memberEmail.create.dto';
import { MemberEmailGetByMemberIdDto } from './dto/memberEmail.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('member/email')
export class MemberEmailController {
  constructor(private readonly memberEmailService: MemberEmailService) {}

  @Post('create')
  async create(@Body() data: MemberEmailCreateDto) {
    return await this.memberEmailService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: MemberEmailGetByMemberIdDto) {
    return await this.memberEmailService.getByMemberId(data);
  }
}
