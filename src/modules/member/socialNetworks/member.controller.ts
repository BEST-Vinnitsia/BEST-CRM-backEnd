import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberSocialNetworksService } from './member.service';
import { MemberSocialNetworksGetByMemberIdDto } from './dto/memberSocialNetworks.getByMemberId.dto';
import { MemberSocialNetworksCreateDto } from './dto/memberSocialNetworks.create.dto';

@UsePipes(new ValidationPipe())
@Controller('member/social-networks')
export class MemberSocialNetworksController {
  constructor(private readonly memberSocialNetworksService: MemberSocialNetworksService) {}

  @Post('create')
  async create(@Body() data: MemberSocialNetworksCreateDto) {
    return await this.memberSocialNetworksService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: MemberSocialNetworksGetByMemberIdDto) {
    return await this.memberSocialNetworksService.getByMemberId(data);
  }
}
