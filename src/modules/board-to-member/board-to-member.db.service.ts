import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBoardToMember,
  IBoardToMemberCreate,
  IBoardToMemberGetById,
  IBoardToMemberUpdate,
  IBoardToMemberDelete,
} from 'src/interfaces/board-to-member.interface';

@Injectable()
export class BoardToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IBoardToMemberCreate): Promise<IBoardToMember> {
    const board = await handlerError(
      this.database.boardToMember.create({
        data: {
          cadenceId: data.cadenceId,
          boardId: data.boardId,
          memberId: data.memberId,
          isLeader: data.isLeader,
        },
      }),
    );
    return board;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IBoardToMember[]> {
    const board = await handlerError(this.database.boardToMember.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: IBoardToMemberGetById): Promise<IBoardToMember> {
    const board = await handlerError(this.database.boardToMember.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IBoardToMemberUpdate): Promise<IBoardToMember> {
    const board = await handlerError(
      this.database.boardToMember.update({
        where: { id: data.id },
        data: {
          cadenceId: data.cadenceId,
          boardId: data.boardId,
          memberId: data.memberId,
          isLeader: data.isLeader,
        },
      }),
    );
    return board;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardToMemberDelete): Promise<IBoardToMember> {
    const board = await handlerError(this.database.boardToMember.delete({ where: { id: data.id } }));
    return board;
  }
}
