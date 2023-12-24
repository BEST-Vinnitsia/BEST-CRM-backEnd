import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberDbService } from './member.db.service';
import {
  IMemberCreate,
  IMemberCreateRes,
  IMemberGetByEmail,
  IMemberGetByEmailRes,
  IMemberGetById,
  IMemberGetByIdRes,
  IMemberGetListRes,
} from 'src/types/member.type';
import {
  IMemberPhoneCreate,
  IMemberPhoneCreateRes,
  IMemberPhoneGetListByMemberId,
  IMemberPhoneGetListByMemberIdRes,
} from 'src/types/memberPhone.type';
import {
  IMemberEmailCreate,
  IMemberEmailCreateRes,
  IMemberEmailGetListByMemberId,
  IMemberEmailGetListByMemberIdRes,
} from 'src/types/memberEmail.type';
import {
  IMemberSocialNetworksCreate,
  IMemberSocialNetworksCreateRes,
  IMemberSocialNetworksGetListByMemberId,
  IMemberSocialNetworksGetListByMemberIdRes,
} from 'src/types/memberSocialNetworks.type';
import {
  IMemberBestEmailCreate,
  IMemberBestEmailCreateRes,
  IMemberBestEmailGetListByMemberId,
  IMemberBestEmailGetListByMemberIdRes,
} from 'src/types/memberBestEmail.type';

@Injectable()
export class MemberService {
  constructor(private readonly memberDb: MemberDbService) {}

  public async create(data: IMemberCreate): Promise<IMemberCreateRes> {
    const findMemberByEmail = await this.memberDb.findByEmail({ email: data.email });
    if (findMemberByEmail) throw new BadRequestException('Member is exist');

    const res = await this.memberDb.create(data);
    return res;
  }

  public async getList(): Promise<IMemberGetListRes[]> {
    const res = await this.memberDb.findAll();
    return res;
  }

  public async getById(data: IMemberGetById): Promise<IMemberGetByIdRes> {
    const findMemberById = await this.memberDb.findById({ id: data.id });
    if (!findMemberById) throw new NotFoundException('Member not found');
    return findMemberById;
  }

  public async getByEmail(data: IMemberGetByEmail): Promise<IMemberGetByEmailRes> {
    const findMemberByEmail = await this.memberDb.findByEmail({ email: data.email });
    if (!findMemberByEmail) throw new NotFoundException('Member not found');
    return findMemberByEmail;
  }

  //
  // Phone
  //

  public async createPhone(data: IMemberPhoneCreate): Promise<IMemberPhoneCreateRes> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newPhone = await this.memberDb.createPhone(data);
    return newPhone;
  }

  public async getPhoneListById(data: IMemberPhoneGetListByMemberId): Promise<IMemberPhoneGetListByMemberIdRes[]> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const phones = await this.memberDb.getPhoneListByMemberId(data);
    return phones;
  }

  //
  // email
  //

  public async createEmail(data: IMemberEmailCreate): Promise<IMemberEmailCreateRes> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newEmail = await this.memberDb.createEmail(data);
    return newEmail;
  }

  public async getEmailListById(data: IMemberEmailGetListByMemberId): Promise<IMemberEmailGetListByMemberIdRes[]> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const emails = await this.memberDb.getEmailListByMemberId(data);
    return emails;
  }

  //
  // social networks
  //

  public async createSocialNetworks(data: IMemberSocialNetworksCreate): Promise<IMemberSocialNetworksCreateRes> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newSocialNetworks = await this.memberDb.createSocialNetworks(data);
    return newSocialNetworks;
  }

  public async getSocialNetworksListById(
    data: IMemberSocialNetworksGetListByMemberId,
  ): Promise<IMemberSocialNetworksGetListByMemberIdRes[]> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const socialNetworks = await this.memberDb.getSocialNetworksListByMemberId(data);
    return socialNetworks;
  }

  //
  // best email
  //

  public async createBestEmail(data: IMemberBestEmailCreate): Promise<IMemberBestEmailCreateRes> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newEmail = await this.memberDb.createBestEmail(data);
    return newEmail;
  }

  public async getBestEmailListById(
    data: IMemberBestEmailGetListByMemberId,
  ): Promise<IMemberBestEmailGetListByMemberIdRes[]> {
    const findMemberById = await this.memberDb.findById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const emails = await this.memberDb.getBestEmailListByMemberId(data);
    return emails;
  }
}
