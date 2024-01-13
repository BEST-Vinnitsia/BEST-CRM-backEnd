import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardDbService } from './board.db.service';
import { IBoard, IBoardCreate, IBoardDelete, IBoardGetById, IBoardUpdate } from 'src/interfaces/board.interface';

@Injectable()
export class BoardService {
  constructor(private readonly boardDBService: BoardDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoard[]> {
    const membershipList = await this.boardDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IBoardGetById): Promise<IBoard> {
    // checking if the member exists
    const membership = await this.boardDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardCreate): Promise<IBoard> {
    // checking if the member exists
    const membership = await this.boardDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('cadence is exist');

    const newMembership = await this.boardDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardUpdate): Promise<IBoard> {
    const updateMembership = await this.boardDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardDelete): Promise<IBoard> {
    // checking if the member exists
    const membership = await this.boardDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.boardDBService.delete(membership);
    return deleteMembership;
  }
}
