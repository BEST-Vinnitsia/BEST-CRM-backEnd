import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBoardToMemberDbCreate,
  IBoardToMemberDbCreateRes,
  IBoardToMemberDbGetById,
  IBoardToMemberDbGetByIdRes,
  IBoardToMemberDbGetListRes,
} from 'src/types/boardToMember.type';

@Injectable()
export class BoardToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ board_id, member_id }: IBoardToMemberDbCreate): Promise<IBoardToMemberDbCreateRes> {
    const lga = await handlerError(this.database.member_to_board.create({ data: { board_id, member_id } }));
    return lga;
  }

  public async findAll(): Promise<IBoardToMemberDbGetListRes[]> {
    const lga = await handlerError(this.database.member_to_board.findMany());
    return lga;
  }

  public async findById({ id }: IBoardToMemberDbGetById): Promise<IBoardToMemberDbGetByIdRes> {
    const lga = await handlerError(this.database.member_to_board.findUnique({ where: { id } }));
    return lga;
  }
}
