import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMembership_Db_Create,
  IMembership_Db_Create_Res,
  IMembership_Db_GetById,
  IMembership_Db_GetById_Res,
  IMembership_Db_GetByName,
  IMembership_Db_GetByName_Res,
  IMembership_Db_GetList_Res,
} from 'src/types/membership.type';

@Injectable()
export class MembershipDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create membership
   */
  public async create({ name }: IMembership_Db_Create): Promise<IMembership_Db_Create_Res> {
    const user = await handlerError(
      this.database.membership.create({
        data: {
          name: name.toLocaleLowerCase(),
        },
      }),
    );
    return user;
  }

  /**
   * get membership list
   */
  public async findAll(): Promise<IMembership_Db_GetList_Res[]> {
    const user = await handlerError(this.database.membership.findMany());
    return user;
  }

  /**
   * get membership by id
   */
  public async findById({ id }: IMembership_Db_GetById): Promise<IMembership_Db_GetById_Res> {
    const user = await handlerError(
      this.database.membership.findUnique({
        where: { id },
      }),
    );
    return user;
  }

  /**
   * get membership by name
   */
  public async findByName({ name }: IMembership_Db_GetByName): Promise<IMembership_Db_GetByName_Res> {
    const user = await handlerError(
      this.database.membership.findUnique({
        where: { name },
      }),
    );
    return user;
  }
}
