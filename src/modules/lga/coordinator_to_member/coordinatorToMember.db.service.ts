import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ILgaBoardToMemberDbCreate,
  ILgaBoardToMemberDbCreateRes,
  ILgaBoardToMemberDbGetById,
  ILgaBoardToMemberDbGetByIdRes,
  ILgaBoardToMemberDbGetListRes,
} from 'src/types/boardToMember.type';

@Injectable()
export class LgaBoardToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ board_id, member_id }: ILgaBoardToMemberDbCreate): Promise<ILgaBoardToMemberDbCreateRes> {
    const lga = await handlerError(this.database.member_to_board.create({ data: { board_id, member_id } }));
    return lga;
  }

  public async findAll(): Promise<ILgaBoardToMemberDbGetListRes[]> {
    const lga = await handlerError(this.database.member_to_board.findMany());
    return lga;
  }

  public async findById({ id }: ILgaBoardToMemberDbGetById): Promise<ILgaBoardToMemberDbGetByIdRes> {
    const lga = await handlerError(this.database.member_to_board.findUnique({ where: { id } }));
    return lga;
  }
}
