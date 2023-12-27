import { Injectable } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinatorToMember.db.service';
import {
  ICoordinatorToMember_Create,
  ICoordinatorToMember_Create_Res,
  ICoordinatorToMember_GetById,
  ICoordinatorToMember_GetById_Res,
  ICoordinatorToMember_GetList_Res,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberService {
  constructor(private readonly coordinatorToMemberDb: CoordinatorToMemberDbService) {}

  async create(data: ICoordinatorToMember_Create): Promise<ICoordinatorToMember_Create_Res> {
    const lga = await this.coordinatorToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<ICoordinatorToMember_GetList_Res[]> {
    const lga = await this.coordinatorToMemberDb.findAll();
    return lga;
  }

  async getById(data: ICoordinatorToMember_GetById): Promise<ICoordinatorToMember_GetById_Res> {
    const lga = await this.coordinatorToMemberDb.findById(data);
    return lga;
  }
}
