import { Injectable } from '@nestjs/common';
import { LgaDbService } from './lga.db.service';
import { ILgaCreate, ILgaCreateRes, ILgaGetById, ILgaGetByIdRes, ILgaGetListRes } from 'src/types/lga.type';

@Injectable()
export class LgaService {
  constructor(private readonly lgaDb: LgaDbService) {}

  async create(data: ILgaCreate): Promise<ILgaCreateRes> {
    const lga = await this.lgaDb.create(data);
    return lga;
  }

  async getList(): Promise<ILgaGetListRes[]> {
    const lga = await this.lgaDb.findAll();
    return lga;
  }

  async getById(data: ILgaGetById): Promise<ILgaGetByIdRes> {
    const lga = await this.lgaDb.findById(data);
    return lga;
  }
}
