import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberDbService } from './member.db.service';
import {
  IMember_Create,
  IMember_Create_Res,
  IMember_GetByEmail,
  IMember_GetByEmail_Res,
  IMember_GetById,
  IMember_GetById_Res,
  IMember_GetList_Res,
} from 'src/types/member.type';

@Injectable()
export class MemberService {
  constructor(private readonly memberDb: MemberDbService) {}

  /**
   * create member
   */
  public async create(data: IMember_Create): Promise<IMember_Create_Res> {
    // checking if the member exists
    const member = await this.memberDb.findByEmail({ email: data.email });
    if (member) throw new BadRequestException('member is exist');

    const newMember = await this.memberDb.create(data);
    return newMember;
  }

  /**
   * get member list
   */
  public async getList(): Promise<IMember_GetList_Res[]> {
    const memberList = await this.memberDb.findAll();
    return memberList;
  }

  /**
   * get member by id
   */
  public async getById(data: IMember_GetById): Promise<IMember_GetById_Res> {
    // checking if the member exists
    const member = await this.memberDb.findById({ id: data.id });
    if (!member) throw new NotFoundException('member not found');

    return member;
  }

  /**
   * get member by email
   */
  public async getByEmail(data: IMember_GetByEmail): Promise<IMember_GetByEmail_Res> {
    // checking if the member exists
    const member = await this.memberDb.findByEmail({ email: data.email });
    if (!member) throw new NotFoundException('member not found');

    return member;
  }
}
