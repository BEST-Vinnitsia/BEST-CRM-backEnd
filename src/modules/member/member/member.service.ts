import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberDbService } from './member.db.service';
import {
  IMemberCreate,
  IMemberCreateRes,
  IMemberGetByEmail,
  IMemberGetByEmailRes,
  IMemberGetById,
  IMemberGetByIdRes,
  IMemberGetListRes,
} from 'src/types/member.type';

@Injectable()
export class MemberService {
  constructor(private readonly memberDb: MemberDbService) {}

  public async create(data: IMemberCreate): Promise<IMemberCreateRes> {
    const findMemberByEmail = await this.memberDb.findByEmail({ email: data.email });
    if (findMemberByEmail) throw new BadRequestException('Member is exist');

    const res = await this.memberDb.create(data);
    return res;
  }

  public async getList(): Promise<IMemberGetListRes[]> {
    const res = await this.memberDb.findAll();
    return res;
  }

  public async getById(data: IMemberGetById): Promise<IMemberGetByIdRes> {
    const findMemberById = await this.memberDb.findById({ id: data.id });
    if (!findMemberById) throw new NotFoundException('Member not found');
    return findMemberById;
  }

  public async getByEmail(data: IMemberGetByEmail): Promise<IMemberGetByEmailRes> {
    const findMemberByEmail = await this.memberDb.findByEmail({ email: data.email });
    if (!findMemberByEmail) throw new NotFoundException('Member not found');
    return findMemberByEmail;
  }
}
