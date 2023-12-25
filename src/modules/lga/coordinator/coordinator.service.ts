import { Injectable } from '@nestjs/common';
import { LgaBoardDbService } from './coordinator.db.service';
import {
  ILgaBoardCreate,
  ILgaBoardCreateRes,
  ILgaBoardGetById,
  ILgaBoardGetByIdRes,
  ILgaBoardGetListRes,
} from 'src/types/lgaBoard.type';

@Injectable()
export class LgaBoardService {
  constructor(private readonly lgaBoardDb: LgaBoardDbService) {}

  async create(data: ILgaBoardCreate): Promise<ILgaBoardCreateRes> {
    const lga = await this.lgaBoardDb.create(data);
    return lga;
  }

  async getList(): Promise<ILgaBoardGetListRes[]> {
    const lga = await this.lgaBoardDb.findAll();
    return lga;
  }

  async getById(data: ILgaBoardGetById): Promise<ILgaBoardGetByIdRes> {
    const lga = await this.lgaBoardDb.findById(data);
    return lga;
  }
}
