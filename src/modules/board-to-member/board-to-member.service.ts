import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardToMemberDbService } from './board-to-member.db.service';
import {
  IBoardToMember,
  IBoardToMemberCreate,
  IBoardToMemberDelete,
  IBoardToMemberGetById,
  IBoardToMemberUpdate,
} from 'src/interfaces/board-to-member.interface';

@Injectable()
export class BoardToMemberService {
  constructor(private readonly boardToMemberDBService: BoardToMemberDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoardToMember[]> {
    const boardToMemberList = await this.boardToMemberDBService.findMany();
    return boardToMemberList;
  }

  // get by id
  public async getById(data: IBoardToMemberGetById): Promise<IBoardToMember> {
    const boardToMember = await this.boardToMemberDBService.findById({ id: data.id });
    if (!boardToMember) throw new NotFoundException('board to member not found');

    return boardToMember;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardToMemberCreate): Promise<IBoardToMember> {
    const boardToMember = await this.boardToMemberDBService.create(data);
    return boardToMember;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardToMemberUpdate): Promise<IBoardToMember> {
    const boardToMember = await this.boardToMemberDBService.checkById({ id: data.id });
    if (!boardToMember) throw new NotFoundException('board to member not found');

    const boardToMemberUpdate = await this.boardToMemberDBService.update(data);
    return boardToMemberUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardToMemberDelete): Promise<IBoardToMember> {
    const boardToMember = await this.boardToMemberDBService.checkById({ id: data.id });
    if (!boardToMember) throw new NotFoundException('board to member is not exist');

    const boardToMemberDelete = await this.boardToMemberDBService.delete(boardToMember);
    return boardToMemberDelete;
  }
}
