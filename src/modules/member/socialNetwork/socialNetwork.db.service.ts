import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ISocialNetwork_Db_Create,
  ISocialNetwork_Db_Create_Res,
  ISocialNetwork_Db_GetListByMemberId,
  ISocialNetwork_Db_GetListByMemberId_Res,
} from 'src/types/socialNetwork.type';

@Injectable()
export class SocialNetworkDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create social network
   */
  public async create({ member_id, name, url }: ISocialNetwork_Db_Create): Promise<ISocialNetwork_Db_Create_Res> {
    const newEmail = await handlerError(
      this.database.member_social_networks.create({
        data: { member_id, name, url },
      }),
    );
    return newEmail;
  }

  /**
   * get social network list by member id
   */
  public async findByMemberId({ member_id }: ISocialNetwork_Db_GetListByMemberId): Promise<ISocialNetwork_Db_GetListByMemberId_Res[]> {
    const emails = await handlerError(
      this.database.member_social_networks.findMany({
        where: { member_id },
      }),
    );
    return emails;
  }
}
