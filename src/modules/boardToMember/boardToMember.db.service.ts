import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBoardToMember_create,
  IBoardToMember_create_RES,
  IBoardToMember_get_id,
  IBoardToMember_get_id_RES,
  IBoardToMember_get_list_RES,
  IBoardToMember_update,
  IBoardToMember_update_RES,
  IBoardToMember_delete,
  IBoardToMember_delete_RES,
} from 'src/types/boardToMember.type';

@Injectable()
export class BoardToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IBoardToMember_create): Promise<IBoardToMember_create_RES> {
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
  public async findMany(): Promise<IBoardToMember_get_list_RES[]> {
    const board = await handlerError(this.database.boardToMember.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: IBoardToMember_get_id): Promise<IBoardToMember_get_id_RES> {
    const board = await handlerError(this.database.boardToMember.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IBoardToMember_update): Promise<IBoardToMember_update_RES> {
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
  public async delete(data: IBoardToMember_delete): Promise<IBoardToMember_delete_RES> {
    const board = await handlerError(this.database.boardToMember.delete({ where: { id: data.id } }));
    return board;
  }
}
