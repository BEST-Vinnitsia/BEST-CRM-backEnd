import { Injectable } from '@nestjs/common';
import { LgaBoardToMemberDbService } from './lgaBoardToMember.db.service';
import { ILgaBoardToMemberCreate, ILgaBoardToMemberCreateRes, ILgaBoardToMemberGetById, ILgaBoardToMemberGetByIdRes, ILgaBoardToMemberGetListRes } from 'src/types/lgaBoardToMember.type';


@Injectable()
export class LgaBoardToMemberService {
  constructor(private readonly lgaBoardDb: LgaBoardToMemberDbService) {}

  async create(data: ILgaBoardToMemberCreate): Promise<ILgaBoardToMemberCreateRes> {
    const lga = await this.lgaBoardDb.create(data);
    return lga;
  }

  async getList(): Promise<ILgaBoardToMemberGetListRes[]> {
    const lga = await this.lgaBoardDb.findAll();
    return lga;
  }

  async getById(data: ILgaBoardToMemberGetById): Promise<ILgaBoardToMemberGetByIdRes> {
    const lga = await this.lgaBoardDb.findById(data);
    return lga;
  }
}
