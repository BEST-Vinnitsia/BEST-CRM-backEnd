import { Injectable } from '@nestjs/common';
import { BoardToMemberDbService } from './boardToMember.db.service';
import {
  IBoardToMemberCreate,
  IBoardToMemberCreateRes,
  IBoardToMemberGetById,
  IBoardToMemberGetByIdRes,
  IBoardToMemberGetListRes,
} from 'src/types/boardToMember.type';

@Injectable()
export class BoardToMemberService {
  constructor(private readonly boardToMemberDb: BoardToMemberDbService) {}

  async create(data: IBoardToMemberCreate): Promise<IBoardToMemberCreateRes> {
    const lga = await this.boardToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<IBoardToMemberGetListRes[]> {
    const lga = await this.boardToMemberDb.findAll();
    return lga;
  }

  async getById(data: IBoardToMemberGetById): Promise<IBoardToMemberGetByIdRes> {
    const lga = await this.boardToMemberDb.findById(data);
    return lga;
  }
}
