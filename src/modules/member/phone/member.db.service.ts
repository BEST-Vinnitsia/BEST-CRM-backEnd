import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMemberPhoneDbCreate,
  IMemberPhoneDbCreateRes,
  IMemberPhoneDbGetListByMemberId,
  IMemberPhoneDbGetListByMemberIdRes,
} from 'src/types/memberPhone.type';
import { IMemberFindById } from 'src/types/member.type';

@Injectable()
export class MemberPhoneDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }): Promise<IMemberFindById> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }

  public async create({ member_id, phone }: IMemberPhoneDbCreate): Promise<IMemberPhoneDbCreateRes> {
    const newPhone = await handlerError(this.database.member_phone.create({ data: { member_id, phone } }));
    return newPhone;
  }

  public async findByMemberId({
    member_id,
  }: IMemberPhoneDbGetListByMemberId): Promise<IMemberPhoneDbGetListByMemberIdRes[]> {
    const phones = await handlerError(this.database.member_phone.findMany({ where: { member_id } }));
    return phones;
  }
}
