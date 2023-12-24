import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMemberEmailDbCreate,
  IMemberEmailDbCreateRes,
  IMemberEmailDbGetListByMemberId,
  IMemberEmailDbGetListByMemberIdRes,
} from 'src/types/memberEmail.type';
import { IMemberFindById } from 'src/types/member.type';

@Injectable()
export class MemberEmailDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }): Promise<IMemberFindById> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }

  public async createEmail({ member_id, email }: IMemberEmailDbCreate): Promise<IMemberEmailDbCreateRes> {
    const newEmail = await handlerError(this.database.member_email.create({ data: { member_id, email } }));
    return newEmail;
  }

  public async getEmailListByMemberId({
    member_id,
  }: IMemberEmailDbGetListByMemberId): Promise<IMemberEmailDbGetListByMemberIdRes[]> {
    const emails = await handlerError(this.database.member_email.findMany({ where: { member_id } }));
    return emails;
  }
}
