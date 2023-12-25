import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ILgaBoardCommitteeToMemberDbCreate,
  ILgaBoardCommitteeToMemberDbCreateRes,
  ILgaBoardCommitteeToMemberDbGetById,
  ILgaBoardCommitteeToMemberDbGetByIdRes,
  ILgaBoardCommitteeToMemberDbGetListRes,
} from 'src/types/lgaBoardCommitteeToMember.type';

@Injectable()
export class LgaBoardCommitteeToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    board_id,
    member_id,
  }: ILgaBoardCommitteeToMemberDbCreate): Promise<ILgaBoardCommitteeToMemberDbCreateRes> {
    const lga = await handlerError(this.database.member_to_board_committee.create({ data: { board_id, member_id } }));
    return lga;
  }

  public async findAll(): Promise<ILgaBoardCommitteeToMemberDbGetListRes[]> {
    const lga = await handlerError(this.database.member_to_board_committee.findMany());
    return lga;
  }

  public async findById({ id }: ILgaBoardCommitteeToMemberDbGetById): Promise<ILgaBoardCommitteeToMemberDbGetByIdRes> {
    const lga = await handlerError(this.database.member_to_board_committee.findUnique({ where: { id } }));
    return lga;
  }
}
