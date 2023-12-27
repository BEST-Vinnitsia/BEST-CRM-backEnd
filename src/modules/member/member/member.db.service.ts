import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMember_Db_Create,
  IMember_Db_Create_Res,
  IMember_Db_GetByEmail,
  IMember_Db_GetByEmail_Res,
  IMember_Db_GetById,
  IMember_Db_GetById_Res,
  IMember_Db_GetList_Res,
} from 'src/types/member.type';

@Injectable()
export class MemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create member
   */
  public async create({
    email,
    password,
    full_name,
    middle_name,
    surname,
    birthday,
    faculty,
    group,
    membership_id,
    clothing_size,
  }: IMember_Db_Create): Promise<IMember_Db_Create_Res> {
    const user = await handlerError(
      this.database.member.create({
        data: {
          email: email.toLocaleLowerCase(),
          password,
          full_name: full_name.toLocaleLowerCase(),
          middle_name: middle_name.toLocaleLowerCase(),
          surname: surname.toLocaleLowerCase(),
          birthday,
          faculty,
          group,
          membership_id,
          clothing_size: clothing_size.toLocaleLowerCase(),
        },
        include: { membership: true },
      }),
    );
    if (user) {
      delete user.password;
      return user;
    }
    return null;
  }

  /**
   * get member list
   */
  public async findAll(): Promise<IMember_Db_GetList_Res[]> {
    const users = await handlerError(
      this.database.member.findMany({
        include: { membership: true },
      }),
    );
    if (users) {
      users.map((item) => {
        delete item.password;
      });
      return users;
    }
    return [];
  }

  /**
   * get member by id
   */
  public async findById({ id }: IMember_Db_GetById): Promise<IMember_Db_GetById_Res> {
    const user = await handlerError(
      this.database.member.findUnique({
        where: { id },
        include: { membership: true, member_best_email: true, member_email: true, member_phone: true },
      }),
    );
    if (user) {
      delete user.password;
      return user;
    }
    return null;
  }

  /**
   * get member by email
   */
  public async findByEmail({ email }: IMember_Db_GetByEmail): Promise<IMember_Db_GetByEmail_Res> {
    const user = await handlerError(this.database.member.findUnique({ where: { email: email.toLocaleLowerCase() } }));
    if (user) {
      delete user.password;
      return user;
    }
    return null;
  }
}
