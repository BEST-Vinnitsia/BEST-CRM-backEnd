import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberSocialNetworksDbService } from './member.db.service';
import {
  IMemberSocialNetworksCreate,
  IMemberSocialNetworksCreateRes,
  IMemberSocialNetworksGetListByMemberId,
  IMemberSocialNetworksGetListByMemberIdRes,
} from 'src/types/memberSocialNetworks.type';

@Injectable()
export class MemberSocialNetworksService {
  constructor(private readonly memberSocialNetworksDb: MemberSocialNetworksDbService) {}

  public async create(data: IMemberSocialNetworksCreate): Promise<IMemberSocialNetworksCreateRes> {
    const findMemberById = await this.memberSocialNetworksDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newSocialNetworks = await this.memberSocialNetworksDb.create(data);
    return newSocialNetworks;
  }

  public async getByMemberId(
    data: IMemberSocialNetworksGetListByMemberId,
  ): Promise<IMemberSocialNetworksGetListByMemberIdRes[]> {
    const findMemberById = await this.memberSocialNetworksDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const socialNetworks = await this.memberSocialNetworksDb.findByMemberId(data);
    return socialNetworks;
  }
}
