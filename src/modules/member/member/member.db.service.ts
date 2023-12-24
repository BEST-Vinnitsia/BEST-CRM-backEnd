import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMemberDbCreate,
  IMemberDbCreateRes,
  IMemberDbGetByEmail,
  IMemberDbGetByEmailRes,
  IMemberDbGetById,
  IMemberDbGetByIdRes,
  IMemberDbGetListRes,
  IMemberFindById,
} from 'src/types/member.type';

@Injectable()
export class MemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }): Promise<IMemberFindById> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }

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
  }: IMemberDbCreate): Promise<IMemberDbCreateRes> {
    const user = await handlerError(
      this.database.member.create({
        data: {
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
        },
        include: { membership: true },
      }),
    );
    if (user) {
      delete user.password;
      delete user.membership_id;
      return user;
    }
    return null;
  }

  public async findAll(): Promise<IMemberDbGetListRes[]> {
    const users = await handlerError(
      this.database.member.findMany({
        include: { membership: true },
      }),
    );
    if (users) {
      users.map((item) => {
        delete item.password;
        delete item.membership_id;
      });
      return users;
    }
    return [];
  }

  public async findById({ id }: IMemberDbGetById): Promise<IMemberDbGetByIdRes> {
    const user = await handlerError(
      this.database.member.findUnique({
        where: { id },
        include: { membership: true, member_best_email: true, member_email: true, member_phone: true },
      }),
    );
    if (user) {
      delete user.password;
      delete user.membership_id;
      return user;
    }
    return null;
  }

  public async findByEmail({ email }: IMemberDbGetByEmail): Promise<IMemberDbGetByEmailRes> {
    const user = await handlerError(this.database.member.findUnique({ where: { email } }));
    if (user) {
      delete user.password;
      return user;
    }
    return null;
  }
}
