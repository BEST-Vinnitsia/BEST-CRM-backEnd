import { Injectable } from '@nestjs/common';
import { CoordinatorDbService } from './coordinator.db.service';
import {
  ICoordinatorCreate,
  ICoordinatorCreateRes,
  ICoordinatorGetById,
  ICoordinatorGetByIdRes,
  ICoordinatorGetListRes,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorDb: CoordinatorDbService) {}

  async create(data: ICoordinatorCreate): Promise<ICoordinatorCreateRes> {
    const lga = await this.coordinatorDb.create(data);
    return lga;
  }

  async getList(): Promise<ICoordinatorGetListRes[]> {
    const lga = await this.coordinatorDb.findAll();
    return lga;
  }

  async getById(data: ICoordinatorGetById): Promise<ICoordinatorGetByIdRes> {
    const lga = await this.coordinatorDb.findById(data);
    return lga;
  }
}
