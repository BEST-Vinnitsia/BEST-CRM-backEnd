import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardDbService } from './board.db.service';
import { IBoard, IBoard_create, IBoard_delete, IBoard_get_id, IBoard_get_list_RES, IBoard_update } from 'src/types/board.type';

@Injectable()
export class BoardService {
  constructor(private readonly boardDBService: BoardDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoard_get_list_RES[]> {
    const membershipList = await this.boardDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IBoard_get_id): Promise<IBoard> {
    // checking if the member exists
    const membership = await this.boardDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoard_create): Promise<IBoard> {
    // checking if the member exists
    const membership = await this.boardDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('cadence is exist');

    const newMembership = await this.boardDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoard_update): Promise<IBoard> {
    const updateMembership = await this.boardDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoard_delete): Promise<IBoard> {
    // checking if the member exists
    const membership = await this.boardDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.boardDBService.delete(membership);
    return deleteMembership;
  }
}
