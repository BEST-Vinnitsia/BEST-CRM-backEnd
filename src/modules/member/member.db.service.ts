import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IMemberCreate, IMemberGet, IMemberGetByEmail, IMemberGetById } from 'src/types/member.type';

const selectMemberGetWithDb = {
  id: true,
  email: true,
  password: false,

  surname: true,
  full_name: true,
  middle_name: true,
  birthday: true,

  faculty: true,
  group: true,

  membership_id: true,

  clothing_size: true,
  create_date: true,
};

@Injectable()
export class MemberDbService {
  constructor(private readonly database: DatabaseService) {}

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
  }: IMemberCreate): Promise<IMemberGet> {
    const user = await handlerError(
      this.database.member.create({
        data: { email, password, full_name, middle_name, surname, birthday, faculty, group, membership_id },
        select: selectMemberGetWithDb,
      }),
    );
    return user;
  }

  public async findAll(): Promise<IMemberGet[]> {
    const user = await handlerError(
      this.database.member.findMany({
        select: selectMemberGetWithDb,
      }),
    );
    return user;
  }

  public async findByEmail({ email }: IMemberGetByEmail): Promise<IMemberGet> {
    const user = await handlerError(
      this.database.member.findUnique({
        where: { email },
        select: selectMemberGetWithDb,
      }),
    );
    return user;
  }

  public async findById({ id }: IMemberGetById): Promise<IMemberGet> {
    const user = await handlerError(
      this.database.member.findUnique({
        where: { id },
        select: selectMemberGetWithDb,
      }),
    );
    return user;
  }
}
