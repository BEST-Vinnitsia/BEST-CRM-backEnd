import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberDbService } from './member.db.service';
import {
  IMember,
  IMemberCreate,
  IMemberCreateRes,
  IMemberDelete,
  IMemberGetId,
  IMemberGetIdRes,
  IMemberGetListRes,
  IMemberUpdate,
} from 'src/interfaces/member/member.type';

@Injectable()
export class MemberService {
  constructor(private readonly memberDBService: MemberDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMemberGetListRes[]> {
    const memberList = await this.memberDBService.findMany();
    return memberList;
  }

  // get by id
  public async getById(data: IMemberGetId): Promise<IMemberGetIdRes> {
    const member = await this.memberDBService.findById({ id: data.id });
    if (!member) throw new NotFoundException('member not found');

    return member;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMemberCreate): Promise<IMemberCreateRes> {
    const memberByEmail = await this.memberDBService.checkByEmail({ email: data.email });
    if (memberByEmail) throw new BadRequestException('member is exist');

    const memberNew = await this.memberDBService.create(data);
    return memberNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMemberUpdate): Promise<IMember> {
    const memberById = await this.memberDBService.checkById({ id: data.id });
    if (!memberById) throw new NotFoundException('member not found');

    const memberUpdate = await this.memberDBService.update(data);
    return memberUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async deleteById(data: IMemberDelete): Promise<IMember> {
    const memberById = await this.memberDBService.checkById({ id: data.id });
    if (!memberById) throw new NotFoundException('member not found');

    const memberDelete = await this.memberDBService.delete({ id: data.id });
    return memberDelete;
  }
}
