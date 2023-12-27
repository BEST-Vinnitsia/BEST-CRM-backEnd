import { Injectable } from '@nestjs/common';
import { CoordinatorDbService } from './coordinator.db.service';
import {
  ICoordinator_Create,
  ICoordinator_Create_Res,
  ICoordinator_GetById,
  ICoordinator_GetById_Res,
  ICoordinator_GetList_Res,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorDb: CoordinatorDbService) {}

  async create(data: ICoordinator_Create): Promise<ICoordinator_Create_Res> {
    const lga = await this.coordinatorDb.create(data);
    return lga;
  }

  async getList(): Promise<ICoordinator_GetList_Res[]> {
    const lga = await this.coordinatorDb.findAll();
    return lga;
  }

  async getById(data: ICoordinator_GetById): Promise<ICoordinator_GetById_Res> {
    const lga = await this.coordinatorDb.findById(data);
    return lga;
  }
}
