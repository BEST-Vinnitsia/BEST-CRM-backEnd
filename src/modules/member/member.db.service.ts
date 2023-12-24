import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMemberDbCreate,
  IMemberDbCreateRes,
  IMemberDbGetByEmail,
  IMemberDbGetByEmailRes,
  IMemberDbGetById,
  IMemberDbGetByIdRes,
  IMemberDbGetListRes,
} from 'src/types/member.type';
import {
  IMemberPhoneDbCreate,
  IMemberPhoneDbCreateRes,
  IMemberPhoneDbGetListByMemberId,
  IMemberPhoneDbGetListByMemberIdRes,
} from 'src/types/memberPhone.type';
import {
  IMemberEmailDbCreate,
  IMemberEmailDbCreateRes,
  IMemberEmailDbGetListByMemberId,
  IMemberEmailDbGetListByMemberIdRes,
} from 'src/types/memberEmail.type';
import {
  IMemberSocialNetworksDbCreate,
  IMemberSocialNetworksDbCreateRes,
  IMemberSocialNetworksDbGetListByMemberId,
  IMemberSocialNetworksDbGetListByMemberIdRes,
} from 'src/types/memberSocialNetworks.type';
import {
  IMemberBestEmailDbCreate,
  IMemberBestEmailDbCreateRes,
  IMemberBestEmailDbGetListByMemberId,
  IMemberBestEmailDbGetListByMemberIdRes,
} from 'src/types/memberBestEmail.type';

@Injectable()
export class MemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    email,
    password,
    full_name,
    middle_name,
    surname,
    birthday,
    faculty,
    group,
    membership_id,
    clothing_size,
  }: IMemberDbCreate): Promise<IMemberDbCreateRes> {
    const user = await handlerError(
      this.database.member.create({
        data: {
          email,
          password,
          full_name,
          middle_name,
          surname,
          birthday,
          faculty,
          group,
          membership_id,
          clothing_size,
        },
        include: { membership: true },
      }),
    );
    if (user) {
      delete user.password;
      delete user.membership_id;
      return user;
    }
    return null;
  }

  public async findAll(): Promise<IMemberDbGetListRes[]> {
    const users = await handlerError(
      this.database.member.findMany({
        include: { membership: true },
      }),
    );
    if (users) {
      users.map((item) => {
        delete item.password;
        delete item.membership_id;
      });
      return users;
    }
    return [];
  }

  public async findById({ id }: IMemberDbGetById): Promise<IMemberDbGetByIdRes> {
    const user = await handlerError(
      this.database.member.findUnique({
        where: { id },
        include: { membership: true },
      }),
    );
    if (user) {
      delete user.password;
      delete user.membership_id;
      return user;
    }
    return null;
  }

  public async findByEmail({ email }: IMemberDbGetByEmail): Promise<IMemberDbGetByEmailRes> {
    const user = await handlerError(
      this.database.member.findUnique({
        where: { email },
        include: { membership: true },
      }),
    );
    if (user) {
      delete user.password;
      delete user.membership_id;
      return user;
    }
    return null;
  }

  //
  // phone
  //

  public async createPhone({ member_id, phone }: IMemberPhoneDbCreate): Promise<IMemberPhoneDbCreateRes> {
    const newPhone = await handlerError(this.database.member_phone.create({ data: { member_id, phone } }));
    return newPhone;
  }

  public async getPhoneListByMemberId({
    member_id,
  }: IMemberPhoneDbGetListByMemberId): Promise<IMemberPhoneDbGetListByMemberIdRes[]> {
    const phones = await handlerError(this.database.member_phone.findMany({ where: { member_id } }));
    return phones;
  }

  //
  // email
  //

  public async createEmail({ member_id, email }: IMemberEmailDbCreate): Promise<IMemberEmailDbCreateRes> {
    const newEmail = await handlerError(this.database.member_email.create({ data: { member_id, email } }));
    return newEmail;
  }

  public async getEmailListByMemberId({
    member_id,
  }: IMemberEmailDbGetListByMemberId): Promise<IMemberEmailDbGetListByMemberIdRes[]> {
    const emails = await handlerError(this.database.member_email.findMany({ where: { member_id } }));
    return emails;
  }

  //
  // social networks
  //

  public async createSocialNetworks({
    member_id,
    name,
    url,
  }: IMemberSocialNetworksDbCreate): Promise<IMemberSocialNetworksDbCreateRes> {
    const newEmail = await handlerError(
      this.database.member_social_networks.create({ data: { member_id, name, url } }),
    );
    return newEmail;
  }

  public async getSocialNetworksListByMemberId({
    member_id,
  }: IMemberSocialNetworksDbGetListByMemberId): Promise<IMemberSocialNetworksDbGetListByMemberIdRes[]> {
    const emails = await handlerError(this.database.member_social_networks.findMany({ where: { member_id } }));
    return emails;
  }

  //
  // best email
  //

  public async createBestEmail({ member_id, email }: IMemberBestEmailDbCreate): Promise<IMemberBestEmailDbCreateRes> {
    const newEmail = await handlerError(this.database.member_best_email.create({ data: { member_id, email } }));
    return newEmail;
  }

  public async getBestEmailListByMemberId({
    member_id,
  }: IMemberBestEmailDbGetListByMemberId): Promise<IMemberBestEmailDbGetListByMemberIdRes[]> {
    const emails = await handlerError(this.database.member_best_email.findMany({ where: { member_id } }));
    return emails;
  }
}
