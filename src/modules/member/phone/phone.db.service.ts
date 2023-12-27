import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IPhone_Db_Create, IPhone_Db_Create_Res, IPhone_Db_GetListByMemberId, IPhone_Db_GetListByMemberId_Res } from 'src/types/phone.type';

@Injectable()
export class PhoneDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create phone
   */
  public async create({ member_id, phone }: IPhone_Db_Create): Promise<IPhone_Db_Create_Res> {
    const newPhone = await handlerError(
      this.database.member_phone.create({
        data: { member_id, phone },
      }),
    );
    return newPhone;
  }

  /**
   * get phone by member id
   */
  public async findByMemberId({ member_id }: IPhone_Db_GetListByMemberId): Promise<IPhone_Db_GetListByMemberId_Res[]> {
    const phones = await handlerError(
      this.database.member_phone.findMany({
        where: { member_id },
      }),
    );
    return phones;
  }
}
