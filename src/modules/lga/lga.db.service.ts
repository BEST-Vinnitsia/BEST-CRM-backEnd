import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ILgaDbCreate, ILgaDbCreateRes, ILgaDbGetById, ILgaDbGetByIdRes, ILgaDbGetListRes } from 'src/types/lga.type';
import { handlerError } from 'src/utils/handlerError';

@Injectable()
export class LgaDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ event_date }: ILgaDbCreate): Promise<ILgaDbCreateRes> {
    const lga = await handlerError(this.database.lga.create({ data: { event_date } }));
    return lga;
  }

  public async findAll(): Promise<ILgaDbGetListRes[]> {
    const lga = await handlerError(this.database.lga.findMany());
    return lga;
  }

  public async findById({ id }: ILgaDbGetById): Promise<ILgaDbGetByIdRes> {
    const lga = await handlerError(this.database.lga.findUnique({ where: { id } }));
    return lga;
  }
}
