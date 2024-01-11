import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardDbService } from './board.db.service';
import {
  IBoard_create,
  IBoard_create_RES,
  IBoard_delete,
  IBoard_delete_RES,
  IBoard_get_id,
  IBoard_get_id_RES,
  IBoard_get_list_RES,
  IBoard_update,
  IBoard_update_RES,
} from 'src/types/board.type';
import { AppDbService } from '../app/app.db.service';

@Injectable()
export class BoardService {
  constructor(
    private readonly boardDBService: BoardDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoard_get_list_RES[]> {
    const membershipList = await this.boardDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IBoard_get_id): Promise<IBoard_get_id_RES> {
    // checking if the member exists
    const membership = await this.boardDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoard_create): Promise<IBoard_create_RES> {
    // checking if the member exists
    const membership = await this.boardDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('cadence is exist');

    const newMembership = await this.boardDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoard_update): Promise<IBoard_update_RES> {
    const updateMembership = await this.boardDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoard_delete): Promise<IBoard_delete_RES> {
    // checking if the member exists
    const membership = await this.boardDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.boardDBService.delete(membership);
    return deleteMembership;
  }
}
