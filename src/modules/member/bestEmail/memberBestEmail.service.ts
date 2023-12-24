import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberBestEmailDbService } from './memberBestEmail.db.service';
import {
  IMemberBestEmailCreate,
  IMemberBestEmailCreateRes,
  IMemberBestEmailGetListByMemberId,
  IMemberBestEmailGetListByMemberIdRes,
} from 'src/types/memberBestEmail.type';

@Injectable()
export class MemberBestEmailService {
  constructor(private readonly memberBestEmailDb: MemberBestEmailDbService) {}

  public async createBestEmail(data: IMemberBestEmailCreate): Promise<IMemberBestEmailCreateRes> {
    const findMemberById = await this.memberBestEmailDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newEmail = await this.memberBestEmailDb.createBestEmail(data);
    return newEmail;
  }

  public async getBestEmailListById(
    data: IMemberBestEmailGetListByMemberId,
  ): Promise<IMemberBestEmailGetListByMemberIdRes[]> {
    const findMemberById = await this.memberBestEmailDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const emails = await this.memberBestEmailDb.getBestEmailListByMemberId(data);
    return emails;
  }
}
