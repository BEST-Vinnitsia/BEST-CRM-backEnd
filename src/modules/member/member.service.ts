import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberDbService } from './member.db.service';
import {
  IMember,
  IMember_create,
  IMember_create_RES,
  IMember_delete_id,
  IMember_get_id,
  IMember_get_id_RES,
  IMember_get_list_RES,
  IMember_update,
} from 'src/interfaces/member/member.type';

@Injectable()
export class MemberService {
  constructor(private readonly memberDBService: MemberDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMember_get_list_RES[]> {
    const memberList = await this.memberDBService.findMany();
    return memberList;
  }

  // get by id
  public async getById(data: IMember_get_id): Promise<IMember_get_id_RES> {
    // checking if the member exists
    const member = await this.memberDBService.findById({ id: data.id });
    if (!member) throw new NotFoundException('member not found');

    return member;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMember_create): Promise<IMember_create_RES> {
    // checking if the member exists
    const member = await this.memberDBService.checkByEmail({ email: data.email });
    if (member) throw new BadRequestException('member is exist');

    const newMember = await this.memberDBService.create(data);
    return newMember;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMember_update): Promise<IMember> {
    // checking if the member exists
    const member = await this.memberDBService.checkById({ id: data.id });
    if (!member) throw new BadRequestException('member is not exist');

    const updateMember = await this.memberDBService.update(data);
    return updateMember;
  }

  /* ----------------  DELETE  ---------------- */

  // delete by id
  public async deleteById(data: IMember_delete_id): Promise<IMember> {
    // checking if the member exists
    const member = await this.memberDBService.checkById({ id: data.id });
    if (!member) throw new NotFoundException('member not found');

    const deleteMember = await this.memberDBService.deleteById({ id: data.id });
    return deleteMember;
  }
}
