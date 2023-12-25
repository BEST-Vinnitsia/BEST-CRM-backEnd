import { Injectable } from '@nestjs/common';
import { LgaBoardToMemberDbService } from './coordinatorToMember.db.service';
import { ILgaBoardToMemberCreate, ILgaBoardToMemberCreateRes, ILgaBoardToMemberGetById, ILgaBoardToMemberGetByIdRes, ILgaBoardToMemberGetListRes } from 'src/types/lgaBoardToMember.type';


@Injectable()
export class LgaBoardToMemberService {
  constructor(private readonly lgaBoardToMemberDb: LgaBoardToMemberDbService) {}

  async create(data: ILgaBoardToMemberCreate): Promise<ILgaBoardToMemberCreateRes> {
    const lga = await this.lgaBoardToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<ILgaBoardToMemberGetListRes[]> {
    const lga = await this.lgaBoardToMemberDb.findAll();
    return lga;
  }

  async getById(data: ILgaBoardToMemberGetById): Promise<ILgaBoardToMemberGetByIdRes> {
    const lga = await this.lgaBoardToMemberDb.findById(data);
    return lga;
  }
}
