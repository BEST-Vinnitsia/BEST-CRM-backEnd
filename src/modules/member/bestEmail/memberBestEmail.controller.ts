import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberBestEmailService } from './memberBestEmail.service';
import { MemberBestEmailCreateDto } from './dto/memberBestEmail.create.dto';
import { MemberBestEmailGetByMemberIdDto } from './dto/memberBestEmail.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('api/v/1/member/best-email')
export class MemberBestEmailController {
  constructor(private readonly memberBestEmailService: MemberBestEmailService) {}

  @Post('create')
  async create(@Body() data: MemberBestEmailCreateDto) {
    return await this.memberBestEmailService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: MemberBestEmailGetByMemberIdDto) {
    return await this.memberBestEmailService.getByMemberId(data);
  }
}
