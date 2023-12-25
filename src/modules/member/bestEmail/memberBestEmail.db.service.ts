import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMemberBestEmailDbCreate,
  IMemberBestEmailDbCreateRes,
  IMemberBestEmailDbGetListByMemberId,
  IMemberBestEmailDbGetListByMemberIdRes,
} from 'src/types/memberBestEmail.type';
import { IMemberFindById } from 'src/types/member.type';

@Injectable()
export class MemberBestEmailDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }): Promise<IMemberFindById> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }

  public async create({ member_id, email }: IMemberBestEmailDbCreate): Promise<IMemberBestEmailDbCreateRes> {
    const newEmail = await handlerError(this.database.member_best_email.create({ data: { member_id, email } }));
    return newEmail;
  }

  public async findByMemberId({
    member_id,
  }: IMemberBestEmailDbGetListByMemberId): Promise<IMemberBestEmailDbGetListByMemberIdRes[]> {
    const emails = await handlerError(this.database.member_best_email.findMany({ where: { member_id } }));
    return emails;
  }
}
