import { Injectable } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinatorToMember.db.service';
import {
  ICoordinatorToMemberCreate,
  ICoordinatorToMemberCreateRes,
  ICoordinatorToMemberGetById,
  ICoordinatorToMemberGetByIdRes,
  ICoordinatorToMemberGetListRes,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberService {
  constructor(private readonly coordinatorToMemberDb: CoordinatorToMemberDbService) {}

  async create(data: ICoordinatorToMemberCreate): Promise<ICoordinatorToMemberCreateRes> {
    const lga = await this.coordinatorToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<ICoordinatorToMemberGetListRes[]> {
    const lga = await this.coordinatorToMemberDb.findAll();
    return lga;
  }

  async getById(data: ICoordinatorToMemberGetById): Promise<ICoordinatorToMemberGetByIdRes> {
    const lga = await this.coordinatorToMemberDb.findById(data);
    return lga;
  }
}
