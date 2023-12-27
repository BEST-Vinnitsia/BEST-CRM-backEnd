import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BestEmailService } from './bestEmail.service';
import { BestEmail_Create_Dto } from './dto/bestEmail.create.dto';
import { BestEmail_GetByMemberId_Dto } from './dto/bestEmail.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('api/v/1/member/best-email')
export class BestEmailController {
  constructor(private readonly memberBestEmailService: BestEmailService) {}

  @Post('create')
  async create(@Body() data: BestEmail_Create_Dto) {
    return await this.memberBestEmailService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: BestEmail_GetByMemberId_Dto) {
    return await this.memberBestEmailService.getByMemberId(data);
  }
}
