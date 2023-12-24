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

  public async createPhone(data: IMemberPhoneCreate): Promise<IMemberPhoneCreateRes> {
    const findMemberById = await this.memberPhoneDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const newPhone = await this.memberPhoneDb.createPhone(data);
    return newPhone;
  }

  public async getPhoneListById(data: IMemberPhoneGetListByMemberId): Promise<IMemberPhoneGetListByMemberIdRes[]> {
    const findMemberById = await this.memberPhoneDb.findMemberById({ id: data.member_id });
    if (!findMemberById) throw new NotFoundException('Member not found');

    const phones = await this.memberPhoneDb.getPhoneListByMemberId(data);
    return phones;
  }
}
