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
import { IMember } from 'src/interfaces/member/member.type';
import { IMembership } from 'src/interfaces/member/membership.type';
import { ICadence } from 'src/interfaces/cadence.interface';
import { IBoard } from 'src/interfaces/board.interface';

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

  /* ----------------  CHECK  ---------------- */

  // check by id
  public async checkById({ id }: { id: string }): Promise<IBoardToMember> {
    const board = await handlerError(this.database.boardToMember.findUnique({ where: { id } }));
    return board;
  }

  // check by cadence
  public async checkCadenceById({ cadenceId }: { cadenceId: string }): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id: cadenceId } }));
    return cadence;
  }

  // check Board by id
  public async checkBoardById({ boardId }: { boardId: string }): Promise<IBoard> {
    const board = await handlerError(this.database.board.findUnique({ where: { id: boardId } }));
    return board;
  }

  // check member and membership
  public async checkMemberAndMembership({ memberId }: { memberId: string }): Promise<IMember & { membership: IMembership }> {
    const member = await handlerError(
      this.database.member.findFirst({
        where: { id: memberId },
        include: { membership: true },
      }),
    );
    return member;
  }
}
