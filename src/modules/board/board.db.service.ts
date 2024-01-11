import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IBoard_create,
  IBoard_create_RES,
  IBoard_get_id,
  IBoard_get_id_RES,
  IBoard_get_list_RES,
  IBoard_update,
  IBoard_update_RES,
  IBoard_delete,
  IBoard_delete_RES,
  IBoar_check_name,
  IBoar_check_name_RES,
} from 'src/types/board.type';

@Injectable()
export class BoardDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IBoard_create): Promise<IBoard_create_RES> {
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
  public async findById({ id }: IBoard_get_id): Promise<IBoard_get_id_RES> {
    const board = await handlerError(this.database.board.findUnique({ where: { id } }));
    return board;
  }

  // check by number
  public async checkByName({ name }: IBoar_check_name): Promise<IBoar_check_name_RES> {
    const board = await handlerError(this.database.board.findUnique({ where: { name } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IBoard_update): Promise<IBoard_update_RES> {
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
  public async delete(data: IBoard_delete): Promise<IBoard_delete_RES> {
    const board = await handlerError(this.database.board.delete({ where: { id: data.id } }));
    return board;
  }
}
