import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ILgaBoardDbCreate,
  ILgaBoardDbCreateRes,
  ILgaBoardDbGetById,
  ILgaBoardDbGetByIdRes,
  ILgaBoardDbGetListRes,
} from 'src/types/lgaBoard.type';

@Injectable()
export class LgaBoardDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ name, is_active, committee_is_active }: ILgaBoardDbCreate): Promise<ILgaBoardDbCreateRes> {
    const lga = await handlerError(this.database.board.create({ data: { name, is_active, committee_is_active } }));
    return lga;
  }

  public async findAll(): Promise<ILgaBoardDbGetListRes[]> {
    const lga = await handlerError(this.database.board.findMany());
    return lga;
  }

  public async findById({ id }: ILgaBoardDbGetById): Promise<ILgaBoardDbGetByIdRes> {
    const lga = await handlerError(this.database.board.findUnique({ where: { id } }));
    return lga;
  }
}
