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

  public async createSocialNetworks(data: IMemberSocialNetworksCreate): Promise<IMemberSocialNetworksCreateRes> {
    const findMemberById = await this.memberSocialNetworksDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newSocialNetworks = await this.memberSocialNetworksDb.createSocialNetworks(data);
    return newSocialNetworks;
  }

  public async getSocialNetworksListById(
    data: IMemberSocialNetworksGetListByMemberId,
  ): Promise<IMemberSocialNetworksGetListByMemberIdRes[]> {
    const findMemberById = await this.memberSocialNetworksDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const socialNetworks = await this.memberSocialNetworksDb.getSocialNetworksListByMemberId(data);
    return socialNetworks;
  }
}
