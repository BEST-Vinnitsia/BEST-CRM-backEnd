import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBestEmail_Db_Create,
  IBestEmail_Db_Create_Res,
  IBestEmail_Db_GetListByMemberId,
  IBestEmail_Db_GetListByMemberId_Res,
} from 'src/types/bestEmail.type';

@Injectable()
export class BestEmailDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create best email
   */
  public async create({ member_id, email }: IBestEmail_Db_Create): Promise<IBestEmail_Db_Create_Res> {
    const newEmail = await handlerError(
      this.database.member_best_email.create({
        data: {
          member_id,
          email: email.toLocaleLowerCase(),
        },
      }),
    );
    return newEmail;
  }

  /**
   * find best email by member id
   */
  public async findByMemberId({ member_id }: IBestEmail_Db_GetListByMemberId): Promise<IBestEmail_Db_GetListByMemberId_Res[]> {
    const emails = await handlerError(
      this.database.member_best_email.findMany({
        where: { member_id },
      }),
    );
    return emails;
  }
}
