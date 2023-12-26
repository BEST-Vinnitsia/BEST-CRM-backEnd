import { Injectable } from '@nestjs/common';
import { MembershipDbService } from './membership.db.service';
import {
  IMembershipCreate,
  IMembershipCreateRes,
  IMembershipGetById,
  IMembershipGetListRes,
  IMembershipGetByIdRes,
} from 'src/types/membership.type';

@Injectable()
export class MembershipService {
  constructor(private readonly membershipDb: MembershipDbService) {}

  public async create(data: IMembershipCreate): Promise<IMembershipCreateRes> {
    const res = await this.membershipDb.create(data);
    return res;
  }

  public async getList(): Promise<IMembershipGetListRes[]> {
    const res = await this.membershipDb.findAll();
    return res;
  }

  public async getById(data: IMembershipGetById): Promise<IMembershipGetByIdRes> {
    const res = await this.membershipDb.findById({ id: data.id });
    return res;
  }
}
