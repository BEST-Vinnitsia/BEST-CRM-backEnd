import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardToMemberDbService } from './boardToMember.db.service';
import {
  IBoardToMember_create,
  IBoardToMember_create_RES,
  IBoardToMember_delete,
  IBoardToMember_delete_RES,
  IBoardToMember_get_id,
  IBoardToMember_get_id_RES,
  IBoardToMember_get_list_RES,
  IBoardToMember_update,
  IBoardToMember_update_RES,
} from 'src/types/boardToMember.type';
import { AppDbService } from '../app/app.db.service';

@Injectable()
export class BoardToMemberService {
  constructor(
    private readonly boardToMemberDBService: BoardToMemberDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoardToMember_get_list_RES[]> {
    const membershipList = await this.boardToMemberDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IBoardToMember_get_id): Promise<IBoardToMember_get_id_RES> {
    // checking if the member exists
    const membership = await this.boardToMemberDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardToMember_create): Promise<IBoardToMember_create_RES> {
    const newMembership = await this.boardToMemberDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardToMember_update): Promise<IBoardToMember_update_RES> {
    const updateMembership = await this.boardToMemberDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardToMember_delete): Promise<IBoardToMember_delete_RES> {
    // checking if the member exists
    const membership = await this.boardToMemberDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.boardToMemberDBService.delete(membership);
    return deleteMembership;
  }
}
