import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberEmailService } from './memberEmail.service';
import { MemberEmailCreateDto } from './dto/memberEmail.create.dto';
import { MemberEmailGetByMemberIdDto } from './dto/memberEmail.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('member/email')
export class MemberEmailController {
  constructor(private readonly memberEmailService: MemberEmailService) {}

  @Post('create')
  async emailCreate(@Body() data: MemberEmailCreateDto) {
    return await this.memberEmailService.createEmail(data);
  }

  @Get('by-member-id')
  async emailByMemberId(@Query() data: MemberEmailGetByMemberIdDto) {
    return await this.memberEmailService.getEmailListById(data);
  }
}
