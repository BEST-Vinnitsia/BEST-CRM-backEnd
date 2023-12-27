import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IEmail_Db_Create,
  IEmail_Db_Create_Res,
  IEmail_Db_GetByMemberIdAndEmail,
  IEmail_Db_GetByMemberIdAndEmail_Res,
  IEmail_Db_GetListByMemberId,
  IEmail_Db_GetListByMemberId_Res,
} from 'src/types/email.type';

@Injectable()
export class EmailDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create email
   */
  public async create({ member_id, email }: IEmail_Db_Create): Promise<IEmail_Db_Create_Res> {
    const newEmail = await handlerError(
      this.database.member_email.create({
        data: { member_id, email: email.toLocaleLowerCase() },
      }),
    );
    return newEmail;
  }

  /**
   * find email by member id
   */
  public async findByMemberId({ member_id }: IEmail_Db_GetListByMemberId): Promise<IEmail_Db_GetListByMemberId_Res[]> {
    const emails = await handlerError(
      this.database.member_email.findMany({
        where: { member_id },
      }),
    );
    return emails;
  }

  /**
   * find email by member id and email name
   */
  public async findByEmailAndMemberId({ email, member_id }: IEmail_Db_GetByMemberIdAndEmail): Promise<IEmail_Db_GetByMemberIdAndEmail_Res> {
    const emailRes = await handlerError(
      this.database.member_email.findFirst({
        where: { member_id, email: email.toLocaleLowerCase() },
      }),
    );
    return emailRes;
  }
}
