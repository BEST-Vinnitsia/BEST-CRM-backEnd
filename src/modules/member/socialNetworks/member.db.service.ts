import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMemberSocialNetworksDbCreate,
  IMemberSocialNetworksDbCreateRes,
  IMemberSocialNetworksDbGetListByMemberId,
  IMemberSocialNetworksDbGetListByMemberIdRes,
} from 'src/types/memberSocialNetworks.type';
import { IMemberFindById } from 'src/types/member.type';

@Injectable()
export class MemberSocialNetworksDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }): Promise<IMemberFindById> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }

  public async create({
    member_id,
    name,
    url,
  }: IMemberSocialNetworksDbCreate): Promise<IMemberSocialNetworksDbCreateRes> {
    const newEmail = await handlerError(
      this.database.member_social_networks.create({ data: { member_id, name, url } }),
    );
    return newEmail;
  }

  public async findByMemberId({
    member_id,
  }: IMemberSocialNetworksDbGetListByMemberId): Promise<IMemberSocialNetworksDbGetListByMemberIdRes[]> {
    const emails = await handlerError(this.database.member_social_networks.findMany({ where: { member_id } }));
    return emails;
  }
}
