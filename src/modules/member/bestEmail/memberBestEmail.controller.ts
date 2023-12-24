import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberBestEmailService } from './memberBestEmail.service';
import { MemberBestEmailCreateDto } from './dto/memberBestEmail.create.dto';
import { MemberBestEmailGetByMemberIdDto } from './dto/memberBestEmail.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('member/best-email')
export class MemberBestEmailController {
  constructor(private readonly memberBestEmailService: MemberBestEmailService) {}

  @Post('create')
  async bestEmailCreate(@Body() data: MemberBestEmailCreateDto) {
    return await this.memberBestEmailService.createBestEmail(data);
  }

  @Get('by-member-id')
  async bestEmailByMemberId(@Query() data: MemberBestEmailGetByMemberIdDto) {
    return await this.memberBestEmailService.getBestEmailListById(data);
  }
}
