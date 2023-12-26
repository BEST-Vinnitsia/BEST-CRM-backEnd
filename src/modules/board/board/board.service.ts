import { Injectable } from '@nestjs/common';
import { BoardDbService } from './board.db.service';
import { IBoardCreate, IBoardCreateRes, IBoardGetById, IBoardGetByIdRes, IBoardGetListRes } from 'src/types/board.type';

@Injectable()
export class BoardService {
  constructor(private readonly lgaBoardDb: BoardDbService) {}

  async create(data: IBoardCreate): Promise<IBoardCreateRes> {
    const lga = await this.lgaBoardDb.create(data);
    return lga;
  }

  async getList(): Promise<IBoardGetListRes[]> {
    const lga = await this.lgaBoardDb.findAll();
    return lga;
  }

  async getById(data: IBoardGetById): Promise<IBoardGetByIdRes> {
    const lga = await this.lgaBoardDb.findById(data);
    return lga;
  }
}
