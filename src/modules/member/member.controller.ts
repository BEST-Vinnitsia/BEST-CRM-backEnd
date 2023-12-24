import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberCreateDto } from './dto/member.create.dto';
import { MemberGetByEmailDto } from './dto/member.getByEmail.dto';
import { MemberGetByIdDto } from './dto/member.getById.dto';
import { MemberPhoneGetByMemberIdDto } from './dto/memberPhone.getByMemberId.dto';
import { MemberPhoneCreateDto } from './dto/memberPhone.create.dto';
import { MemberEmailCreateDto } from './dto/memberEmail.create.dto';
import { MemberEmailGetByMemberIdDto } from './dto/memberEmail.getByMemberId.dto';
import { MemberSocialNetworksCreateDto } from './dto/memberSocialNetworks.create.dto';
import { MemberSocialNetworksGetByMemberIdDto } from './dto/memberSocialNetworks.getByMemberId.dto';
import { MemberBestEmailCreateDto } from './dto/memberBestEmail.create.dto';
import { MemberBestEmailGetByMemberIdDto } from './dto/memberBestEmail.getByMemberId.dto';

@UsePipes(new ValidationPipe())
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('create')
  async create(@Body() data: MemberCreateDto) {
    return await this.memberService.create(data);
  }

  @Get('list')
  async list() {
    return await this.memberService.getList();
  }

  @Get('by-id')
  async byId(@Query() data: MemberGetByIdDto) {
    return await this.memberService.getById(data);
  }

  @Get('by-email')
  async byEmail(@Query() data: MemberGetByEmailDto) {
    return await this.memberService.getByEmail(data);
  }

  //
  // phone
  //

  @Post('phone/create')
  async phoneCreate(@Body() data: MemberPhoneCreateDto) {
    return await this.memberService.createPhone(data);
  }

  @Get('phone/by-member-id')
  async phoneByMemberId(@Query() data: MemberPhoneGetByMemberIdDto) {
    return await this.memberService.getPhoneListById(data);
  }

  //
  // email
  //

  @Post('email/create')
  async emailCreate(@Body() data: MemberEmailCreateDto) {
    return await this.memberService.createEmail(data);
  }

  @Get('email/by-member-id')
  async emailByMemberId(@Query() data: MemberEmailGetByMemberIdDto) {
    return await this.memberService.getEmailListById(data);
  }

  //
  // social networks
  //

  @Post('social-networks/create')
  async socialNetworksCreate(@Body() data: MemberSocialNetworksCreateDto) {
    return await this.memberService.createSocialNetworks(data);
  }

  @Get('social-networks/by-member-id')
  async socialNetworksByMemberId(@Query() data: MemberSocialNetworksGetByMemberIdDto) {
    return await this.memberService.getSocialNetworksListById(data);
  }

  //
  // best email
  //

  @Post('best-email/create')
  async bestEmailCreate(@Body() data: MemberBestEmailCreateDto) {
    return await this.memberService.createBestEmail(data);
  }

  @Get('best-email/by-member-id')
  async bestEmailByMemberId(@Query() data: MemberBestEmailGetByMemberIdDto) {
    return await this.memberService.getBestEmailListById(data);
  }
}
