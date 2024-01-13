import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardDbService } from './board.db.service';
import { IBoard, IBoardCreate, IBoardDelete, IBoardGetById, IBoardUpdate } from 'src/interfaces/board.interface';

@Injectable()
export class BoardService {
  constructor(private readonly boardDBService: BoardDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoard[]> {
    const boardList = await this.boardDBService.findMany();
    return boardList;
  }

  // get by id
  public async getById(data: IBoardGetById): Promise<IBoard> {
    const board = await this.boardDBService.findById({ id: data.id });
    if (!board) throw new NotFoundException('board not found');

    return board;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardCreate): Promise<IBoard> {
    const board = await this.boardDBService.checkByName({ name: data.name });
    if (board) throw new BadRequestException('board is exist');

    const boardNew = await this.boardDBService.create(data);
    return boardNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardUpdate): Promise<IBoard> {
    const board = await this.boardDBService.checkById({ id: data.id });
    if (!board) throw new NotFoundException('board is not exist');

    const membershipUpdate = await this.boardDBService.update(data);
    return membershipUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardDelete): Promise<IBoard> {
    const board = await this.boardDBService.checkById({ id: data.id });
    if (!board) throw new NotFoundException('board is not exist');

    const boardDelete = await this.boardDBService.delete(data);
    return boardDelete;
  }
}
