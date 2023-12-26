import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBoardCommitteeToMemberDbCreate,
  IBoardCommitteeToMemberDbCreateRes,
  IBoardCommitteeToMemberDbGetById,
  IBoardCommitteeToMemberDbGetByIdRes,
  IBoardCommitteeToMemberDbGetListRes,
} from 'src/types/boardCommitteeToMember.type';

@Injectable()
export class BoardCommitteeToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    board_id,
    member_id,
    cadence_id,
  }: IBoardCommitteeToMemberDbCreate): Promise<IBoardCommitteeToMemberDbCreateRes> {
    const lga = await handlerError(
      this.database.member_to_board_committee.create({ data: { board_id, member_id, cadence_id } }),
    );
    return lga;
  }

  public async findAll(): Promise<IBoardCommitteeToMemberDbGetListRes[]> {
    const lga = await handlerError(this.database.member_to_board_committee.findMany());
    return lga;
  }

  public async findById({ id }: IBoardCommitteeToMemberDbGetById): Promise<IBoardCommitteeToMemberDbGetByIdRes> {
    const lga = await handlerError(this.database.member_to_board_committee.findUnique({ where: { id } }));
    return lga;
  }
}
