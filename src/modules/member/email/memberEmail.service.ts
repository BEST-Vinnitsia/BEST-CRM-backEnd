import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberEmailDbService } from './memberEmail.db.service';
import {
  IMemberEmailCreate,
  IMemberEmailCreateRes,
  IMemberEmailGetListByMemberId,
  IMemberEmailGetListByMemberIdRes,
} from 'src/types/memberEmail.type';

@Injectable()
export class MemberEmailService {
  constructor(private readonly memberEmailDb: MemberEmailDbService) {}

  public async create(data: IMemberEmailCreate): Promise<IMemberEmailCreateRes> {
    const findMemberById = await this.memberEmailDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newEmail = await this.memberEmailDb.create(data);
    return newEmail;
  }

  public async getByMemberId(data: IMemberEmailGetListByMemberId): Promise<IMemberEmailGetListByMemberIdRes[]> {
    const findMemberById = await this.memberEmailDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const emails = await this.memberEmailDb.findByMemberId(data);
    return emails;
  }
}
