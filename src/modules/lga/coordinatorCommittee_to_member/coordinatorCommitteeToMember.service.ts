import { Injectable } from '@nestjs/common';
import { CoordinatorCommitteeToMemberDbService } from './coordinatorCommitteeToMember.db.service';
import {
  ICoordinatorCommitteeToMemberCreate,
  ICoordinatorCommitteeToMemberCreateRes,
  ICoordinatorCommitteeToMemberGetById,
  ICoordinatorCommitteeToMemberGetByIdRes,
  ICoordinatorCommitteeToMemberGetListRes,
} from 'src/types/coordinatorCommitteeToMember.type';

@Injectable()
export class CoordinatorCommitteeToMemberService {
  constructor(private readonly coordinatorCommitteeToMemberDb: CoordinatorCommitteeToMemberDbService) {}

  async create(data: ICoordinatorCommitteeToMemberCreate): Promise<ICoordinatorCommitteeToMemberCreateRes> {
    const lga = await this.coordinatorCommitteeToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<ICoordinatorCommitteeToMemberGetListRes[]> {
    const lga = await this.coordinatorCommitteeToMemberDb.findAll();
    return lga;
  }

  async getById(data: ICoordinatorCommitteeToMemberGetById): Promise<ICoordinatorCommitteeToMemberGetByIdRes> {
    const lga = await this.coordinatorCommitteeToMemberDb.findById(data);
    return lga;
  }
}
