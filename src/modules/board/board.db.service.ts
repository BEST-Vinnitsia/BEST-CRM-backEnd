import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IBoard, IBoardCreate, IBoardGetById, IBoardUpdate, IBoardDelete, IBoardCheckName } from 'src/interfaces/board.interface';

@Injectable()
export class BoardDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IBoardCreate): Promise<IBoard> {
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
  public async findMany(): Promise<IBoard[]> {
    const board = await handlerError(this.database.board.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: IBoardGetById): Promise<IBoard> {
    const board = await handlerError(this.database.board.findUnique({ where: { id } }));
    return board;
  }

  // check by number
  public async checkByName({ name }: IBoardCheckName): Promise<IBoard> {
    const board = await handlerError(this.database.board.findUnique({ where: { name } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IBoardUpdate): Promise<IBoard> {
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
  public async delete(data: IBoardDelete): Promise<IBoard> {
    const board = await handlerError(this.database.board.delete({ where: { id: data.id } }));
    return board;
  }
}
