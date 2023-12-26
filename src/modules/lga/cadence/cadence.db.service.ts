import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import {
  ICadenceDbCreate,
  ICadenceDbCreateRes,
  ICadenceDbGetById,
  ICadenceDbGetByIdRes,
  ICadenceDbGetListRes,
} from 'src/types/cadence.type';
import { handlerError } from 'src/utils/handlerError';

@Injectable()
export class CadenceDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ number, start_date, end_date }: ICadenceDbCreate): Promise<ICadenceDbCreateRes> {
    const lga = await handlerError(this.database.cadence.create({ data: { number, start_date, end_date } }));
    return lga;
  }

  public async findAll(): Promise<ICadenceDbGetListRes[]> {
    const lga = await handlerError(this.database.cadence.findMany());
    return lga;
  }

  public async findById({ id }: ICadenceDbGetById): Promise<ICadenceDbGetByIdRes> {
    const lga = await handlerError(this.database.cadence.findUnique({ where: { id } }));
    return lga;
  }
}
