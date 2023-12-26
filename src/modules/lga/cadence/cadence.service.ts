import { Injectable } from '@nestjs/common';
import { CadenceDbService } from './cadence.db.service';
import {
  ICadenceCreate,
  ICadenceCreateRes,
  ICadenceGetById,
  ICadenceGetByIdRes,
  ICadenceGetListRes,
} from 'src/types/cadence.type';

@Injectable()
export class CadenceService {
  constructor(private readonly cadenceDb: CadenceDbService) {}

  async create(data: ICadenceCreate): Promise<ICadenceCreateRes> {
    const lga = await this.cadenceDb.create(data);
    return lga;
  }

  async getList(): Promise<ICadenceGetListRes[]> {
    const lga = await this.cadenceDb.findAll();
    return lga;
  }

  async getById(data: ICadenceGetById): Promise<ICadenceGetByIdRes> {
    const lga = await this.cadenceDb.findById(data);
    return lga;
  }
}
