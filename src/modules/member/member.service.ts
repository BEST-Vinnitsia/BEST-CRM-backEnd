import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MemberDbService } from './member.db.service';
import { IMemberCreate, IMemberGet, IMemberGetByEmail, IMemberGetById } from 'src/types/member.type';

@Injectable()
export class MemberService {
  constructor(private readonly memberDb: MemberDbService) {}

  public async getList(): Promise<IMemberGet[]> {
    const res = await this.memberDb.findAll();
    return res;
  }

  public async getById(data: IMemberGetById): Promise<IMemberGet> {
    const findMemberById = await this.memberDb.findById(data);
    if (!findMemberById) throw new NotFoundException('Member not found');
    return findMemberById;
  }

  public async getByEmail(data: IMemberGetByEmail): Promise<IMemberGet> {
    const findMemberByEmail = await this.memberDb.findByEmail(data);
    if (!findMemberByEmail) throw new NotFoundException('Member not found');
    return findMemberByEmail;
  }

  public async create(data: IMemberCreate): Promise<IMemberGet> {
    const findMemberByEmail = await this.memberDb.findByEmail(data);
    if (findMemberByEmail) throw new BadRequestException('Member is exist');

    const res = await this.memberDb.create(data);
    return res;
  }
}
