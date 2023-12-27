import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ITranslation_Db_Create,
  ITranslation_Db_Create_Res,
  ITranslation_Db_GetById,
  ITranslation_Db_GetById_Res,
  ITranslation_Db_GetList_Res,
} from 'src/types/translation.type';

@Injectable()
export class TranslationDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create translation
   */
  public async create({ meeting_id, member_id, membership_id }: ITranslation_Db_Create): Promise<ITranslation_Db_Create_Res> {
    const user = await handlerError(
      this.database.translation.create({
        data: { meeting_id, member_id, membership_id },
      }),
    );
    return user;
  }

  /**
   * get translation list
   */
  public async findAll(): Promise<ITranslation_Db_GetList_Res[]> {
    const user = await handlerError(this.database.translation.findMany());
    return user;
  }

  /**
   * get translation by id
   */
  public async findById({ id }: ITranslation_Db_GetById): Promise<ITranslation_Db_GetById_Res> {
    const user = await handlerError(
      this.database.translation.findUnique({
        where: { id },
        // include: { lga: true, member: true, membership: true },
      }),
    );
    return user;
  }
}
