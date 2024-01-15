import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IBoard, IBoardCreate, IBoardDelete, IBoardGetById, IBoardUpdate } from 'src/interfaces/board.interface';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoard[]> {
    const boardList = await this.prisma.board.findMany();

    return boardList;
  }

  // get by id
  public async getById(data: IBoardGetById): Promise<IBoard> {
    const board = await this.prisma.board.findUnique({
      where: { id: data.id },
    });

    if (!board) throw new NotFoundException('board not found');

    return board;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardCreate): Promise<IBoard> {
    const board = await this.checkByName({ name: data.name });
    if (board) throw new BadRequestException('board is exist');

    const boardNew = await this.prisma.board.create({
      data: {
        name: data.name,
        isActive: data.isActive,
        committeeIsActive: data.committeeIsActive,
      },
    });

    return boardNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardUpdate): Promise<IBoard> {
    const board = await this.checkById({ id: data.id });
    if (!board) throw new NotFoundException('board is not exist');

    const membershipUpdate = await this.prisma.board.update({
      where: { id: data.id },
      data: {
        isActive: data.isActive,
        committeeIsActive: data.committeeIsActive,
      },
    });

    return membershipUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardDelete): Promise<IBoard> {
    const board = await this.checkById({ id: data.id });
    if (!board) throw new NotFoundException('board is not exist');

    const boardDelete = this.prisma.board.delete({
      where: { id: data.id },
    });

    return boardDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<IBoard> {
    const board = await this.prisma.board.findUnique({ where: { id } });
    return board;
  }

  // check by number
  private async checkByName({ name }: { name: string }): Promise<IBoard> {
    const board = await this.prisma.board.findUnique({ where: { name } });
    return board;
  }
}
