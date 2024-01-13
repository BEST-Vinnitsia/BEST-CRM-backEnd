import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMember,
  IMemberCreate,
  IMemberCreateRes,
  IMemberCheckEmail,
  IMemberGetId,
  IMemberGetIdRes,
  IMemberGetListRes,
  IMemberCheckById,
  IMemberDelete,
  IMemberUpdate,
} from 'src/interfaces/member/member.type';

@Injectable()
export class MemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMemberCreate): Promise<IMemberCreateRes> {
    const member = await handlerError(
      this.database.member.create({
        data: {
          membershipId: data.membershipId,
          //
          email: data.email.toLocaleLowerCase(),
          password: data.password,
          bestEmail: data.bestEmail ? data.bestEmail.toLocaleLowerCase() : null,
          //
          fullName: data.fullName.toLocaleLowerCase(),
          middleName: data.middleName.toLocaleLowerCase(),
          surname: data.surname.toLocaleLowerCase(),
          birthday: data.birthday,
          //
          faculty: data.faculty.toLocaleLowerCase(),
          group: data.group.toLocaleLowerCase(),
          //
          clothingSize: data.clothingSize ? data.clothingSize.toLocaleUpperCase() : null,
          homeAddress: data.homeAddress ? data.homeAddress.toLocaleLowerCase() : null,
        },
        include: { membership: true },
      }),
    );
    return member;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IMemberGetListRes[]> {
    const member = await handlerError(
      this.database.member.findMany({
        include: { membership: true },
      }),
    );
    return member;
  }

  // find by id
  public async findById({ id }: IMemberGetId): Promise<IMemberGetIdRes> {
    const member = await handlerError(
      this.database.member.findUnique({
        where: { id },
        include: { membership: true, memberEmail: true, memberPhone: true, memberSocialNetwork: true },
      }),
    );
    return member;
  }

  // check by id
  public async checkById({ id }: IMemberCheckById): Promise<IMember> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    return member;
  }

  // check by email
  public async checkByEmail({ email }: IMemberCheckEmail): Promise<IMember> {
    const member = await handlerError(this.database.member.findUnique({ where: { email } }));
    return member;
  }

  /* ----------------  UPDATE  ---------------- */

  public async update(data: IMemberUpdate): Promise<IMember> {
    const member = await handlerError(
      this.database.member.update({
        where: { id: data.id },
        data: {
          membershipId: data.membershipId,
          //
          email: data.email.toLocaleLowerCase(),
          password: data.password,
          bestEmail: data.bestEmail ? data.bestEmail.toLocaleLowerCase() : null,
          //
          fullName: data.fullName.toLocaleLowerCase(),
          middleName: data.middleName.toLocaleLowerCase(),
          surname: data.surname.toLocaleLowerCase(),
          birthday: data.birthday,
          //
          faculty: data.faculty.toLocaleLowerCase(),
          group: data.group.toLocaleLowerCase(),
          //
          clothingSize: data.clothingSize ? data.clothingSize.toLocaleUpperCase() : null,
          homeAddress: data.homeAddress ? data.homeAddress.toLocaleLowerCase() : null,
        },
        include: { membership: true },
      }),
    );
    return member;
  }

  /* ----------------  DELETE  ---------------- */

  // delete by id
  public async deleteById({ id }: IMemberDelete): Promise<IMember> {
    const member = await handlerError(this.database.member.delete({ where: { id } }));
    return member;
  }
}
