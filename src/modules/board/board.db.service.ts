import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IBoard, IBoard_create, IBoard_get_id, IBoard_get_list_RES, IBoard_update, IBoard_delete, IBoard_check_name } from 'src/types/board.type';

@Injectable()
export class BoardDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IBoard_create): Promise<IBoard> {
    const board = await handlerError(
      this.database.board.create({
        data: {
          name: data.name,
          isActive: data.isActive,
          committeeIsActive: data.committeeIsActive,
        },
      }),
    );
    return board;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IBoard_get_list_RES[]> {
    const board = await handlerError(this.database.board.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: IBoard_get_id): Promise<IBoard> {
    const board = await handlerError(this.database.board.findUnique({ where: { id } }));
    return board;
  }

  // check by number
  public async checkByName({ name }: IBoard_check_name): Promise<IBoard> {
    const board = await handlerError(this.database.board.findUnique({ where: { name } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IBoard_update): Promise<IBoard> {
    const board = await handlerError(
      this.database.board.update({
        where: { id: data.id },
        data: {
          isActive: data.isActive,
          committeeIsActive: data.committeeIsActive,
        },
      }),
    );
    return board;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoard_delete): Promise<IBoard> {
    const board = await handlerError(this.database.board.delete({ where: { id: data.id } }));
    return board;
  }
}
