import { Injectable } from '@nestjs/common';
import { LgaBoardCommitteeToMemberDbService } from './lgaBoardCommitteeToMember.db.service';
import {
  ILgaBoardCommitteeToMemberCreate,
  ILgaBoardCommitteeToMemberCreateRes,
  ILgaBoardCommitteeToMemberGetById,
  ILgaBoardCommitteeToMemberGetByIdRes,
  ILgaBoardCommitteeToMemberGetListRes,
} from 'src/types/lgaBoardCommitteeToMember.type';

@Injectable()
export class LgaBoardCommitteeToMemberService {
  constructor(private readonly lgaBoardCommitteeToMemberDb: LgaBoardCommitteeToMemberDbService) {}

  async create(data: ILgaBoardCommitteeToMemberCreate): Promise<ILgaBoardCommitteeToMemberCreateRes> {
    const lga = await this.lgaBoardCommitteeToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<ILgaBoardCommitteeToMemberGetListRes[]> {
    const lga = await this.lgaBoardCommitteeToMemberDb.findAll();
    return lga;
  }

  async getById(data: ILgaBoardCommitteeToMemberGetById): Promise<ILgaBoardCommitteeToMemberGetByIdRes> {
    const lga = await this.lgaBoardCommitteeToMemberDb.findById(data);
    return lga;
  }
}
