import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBoardDbCreate,
  IBoardDbCreateRes,
  IBoardDbGetById,
  IBoardDbGetByIdRes,
  IBoardDbGetListRes,
} from 'src/types/board.type';

@Injectable()
export class BoardDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ name, is_active, committee_is_active }: IBoardDbCreate): Promise<IBoardDbCreateRes> {
    const lga = await handlerError(this.database.board.create({ data: { name, is_active, committee_is_active } }));
    return lga;
  }

  public async findAll(): Promise<IBoardDbGetListRes[]> {
    const lga = await handlerError(this.database.board.findMany());
    return lga;
  }

  public async findById({ id }: IBoardDbGetById): Promise<IBoardDbGetByIdRes> {
    const lga = await handlerError(this.database.board.findUnique({ where: { id } }));
    return lga;
  }
}
