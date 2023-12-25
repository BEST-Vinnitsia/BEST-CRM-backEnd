import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberPhoneService } from './member.service';
import { MemberPhoneGetByMemberIdDto } from './dto/memberPhone.getByMemberId.dto';
import { MemberPhoneCreateDto } from './dto/memberPhone.create.dto';

@UsePipes(new ValidationPipe())
@Controller('member/phone')
export class MemberPhoneController {
  constructor(private readonly memberPhoneService: MemberPhoneService) {}

  @Post('create')
  async create(@Body() data: MemberPhoneCreateDto) {
    return await this.memberPhoneService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: MemberPhoneGetByMemberIdDto) {
    return await this.memberPhoneService.getByMemberId(data);
  }
}
