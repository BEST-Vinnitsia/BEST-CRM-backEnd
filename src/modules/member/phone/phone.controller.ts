import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { Phone_Create_Dto } from './dto/phone.create.dto';
import { Phone_GetByMemberId_Dto } from './dto/phone.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('api/v/1/member/phone')
export class PhoneController {
  constructor(private readonly memberPhoneService: PhoneService) {}

  @Post('create')
  async create(@Body() data: Phone_Create_Dto) {
    return await this.memberPhoneService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: Phone_GetByMemberId_Dto) {
    return await this.memberPhoneService.getByMemberId(data);
  }
}
