import { Injectable } from '@nestjs/common';
import { MembershipDbService } from './membership.db.service';
import { IMembership, IMembershipGetById } from 'src/types/membership.type';

@Injectable()
export class MembershipService {
  constructor(private readonly membershipDb: MembershipDbService) {}

  public async getList(): Promise<IMembership[]> {
    const res = await this.membershipDb.findAll();
    return res;
  }

  public async getById(data: IMembershipGetById): Promise<IMembership> {
    const res = await this.membershipDb.findById({ id: data.id });
    return res;
  }
}
