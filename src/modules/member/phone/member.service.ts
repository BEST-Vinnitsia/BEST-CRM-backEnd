import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberPhoneDbService } from './member.db.service';
import {
  IMemberPhoneCreate,
  IMemberPhoneCreateRes,
  IMemberPhoneGetListByMemberId,
  IMemberPhoneGetListByMemberIdRes,
} from 'src/types/memberPhone.type';

@Injectable()
export class MemberPhoneService {
  constructor(private readonly memberPhoneDb: MemberPhoneDbService) {}

  public async create(data: IMemberPhoneCreate): Promise<IMemberPhoneCreateRes> {
    const findMemberById = await this.memberPhoneDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newPhone = await this.memberPhoneDb.create(data);
    return newPhone;
  }

  public async getByMemberId(data: IMemberPhoneGetListByMemberId): Promise<IMemberPhoneGetListByMemberIdRes[]> {
    const findMemberById = await this.memberPhoneDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const phones = await this.memberPhoneDb.findByMemberId(data);
    return phones;
  }
}
