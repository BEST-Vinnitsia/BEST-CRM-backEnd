import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SocialNetworkDbService } from './socialNetwork.db.service';
import {
  ISocialNetwork_Create,
  ISocialNetwork_Create_Res,
  ISocialNetwork_GetListByMemberId,
  ISocialNetwork_GetListByMemberId_Res,
} from 'src/types/socialNetwork.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class SocialNetworkService {
  constructor(
    private readonly memberSocialNetworksDb: SocialNetworkDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create social network
   */
  public async create(data: ISocialNetwork_Create): Promise<ISocialNetwork_Create_Res> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    const newSocialNetworks = await this.memberSocialNetworksDb.create(data);
    return newSocialNetworks;
  }

  /**
   * get social network list by member id
   */
  public async getByMemberId(data: ISocialNetwork_GetListByMemberId): Promise<ISocialNetwork_GetListByMemberId_Res[]> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    const socialNetworks = await this.memberSocialNetworksDb.findByMemberId(data);
    return socialNetworks;
  }
}
