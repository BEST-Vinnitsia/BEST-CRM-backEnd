import { Injectable } from '@nestjs/common';
import { BoardCommitteeToMemberDbService } from './boardCommitteeToMember.db.service';
import {
  IBoardCommitteeToMemberCreate,
  IBoardCommitteeToMemberCreateRes,
  IBoardCommitteeToMemberGetById,
  IBoardCommitteeToMemberGetByIdRes,
  IBoardCommitteeToMemberGetListRes,
} from 'src/types/boardCommitteeToMember.type';

@Injectable()
export class BoardCommitteeToMemberService {
  constructor(private readonly boardCommitteeToMemberDb: BoardCommitteeToMemberDbService) {}

  async create(data: IBoardCommitteeToMemberCreate): Promise<IBoardCommitteeToMemberCreateRes> {
    const lga = await this.boardCommitteeToMemberDb.create(data);
    return lga;
  }

  async getList(): Promise<IBoardCommitteeToMemberGetListRes[]> {
    const lga = await this.boardCommitteeToMemberDb.findAll();
    return lga;
  }

  async getById(data: IBoardCommitteeToMemberGetById): Promise<IBoardCommitteeToMemberGetByIdRes> {
    const lga = await this.boardCommitteeToMemberDb.findById(data);
    return lga;
  }
}
