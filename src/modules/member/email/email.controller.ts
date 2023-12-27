import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmailService } from './email.service';
import { Email_Create_Dto } from './dto/email.create.dto';
import { Email_GetByMemberId_Dto } from './dto/email.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('api/v/1/member/email')
export class EmailController {
  constructor(private readonly memberEmailService: EmailService) {}

  @Post('create')
  async create(@Body() data: Email_Create_Dto) {
    return await this.memberEmailService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: Email_GetByMemberId_Dto) {
    return await this.memberEmailService.getByMemberId(data);
  }
}
