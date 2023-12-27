import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { SocialNetworkService } from './socialNetwork.service';
import { SocialNetwork_Create_Dto } from './dto/socialNetwork.create.dto';
import { SocialNetwork_GetByMemberId_Dto } from './dto/socialNetwork.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('api/v/1/member/social-networks')
export class SocialNetworkController {
  constructor(private readonly memberSocialNetworksService: SocialNetworkService) {}

  @Post('create')
  async create(@Body() data: SocialNetwork_Create_Dto) {
    return await this.memberSocialNetworksService.create(data);
  }

  @Get('by-member-id')
  async byMemberId(@Query() data: SocialNetwork_GetByMemberId_Dto) {
    return await this.memberSocialNetworksService.getByMemberId(data);
  }
}
