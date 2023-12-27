import { Injectable } from '@nestjs/common';
import { CoordinatorCommitteeToMemberDbService } from './coordinatorCommitteeToMember.db.service';
import {
  ICoordinatorCommitteeToMember_Create,
  ICoordinatorCommitteeToMember_Create_Res,
  ICoordinatorCommitteeToMember_GetById,
  ICoordinatorCommitteeToMember_GetById_Res,
  ICoordinatorCommitteeToMember_GetList_Res,
} from 'src/types/coordinatorCommitteeToMember.type';

@Injectable()
export class CoordinatorCommitteeToMemberService {
  constructor(private readonly coordinatorCommitteeToMemberDb: CoordinatorCommitteeToMemberDbService) {}

  async create(data: ICoordinatorCommitteeToMember_Create): Promise<ICoordinatorCommitteeToMember_Create_Res> {
    const lga = await this.coordinatorCommitteeToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<ICoordinatorCommitteeToMember_GetList_Res[]> {
    const lga = await this.coordinatorCommitteeToMemberDb.findAll();
    return lga;
  }

  async getById(data: ICoordinatorCommitteeToMember_GetById): Promise<ICoordinatorCommitteeToMember_GetById_Res> {
    const lga = await this.coordinatorCommitteeToMemberDb.findById(data);
    return lga;
  }
}
