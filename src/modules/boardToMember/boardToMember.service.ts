import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardToMemberDbService } from './boardToMember.db.service';
import {
  IBoardToMember,
  IBoardToMember_create,
  IBoardToMember_delete,
  IBoardToMember_get_id,
  IBoardToMember_update,
} from 'src/types/boardToMember.type';

@Injectable()
export class BoardToMemberService {
  constructor(private readonly boardToMemberDBService: BoardToMemberDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoardToMember[]> {
    const membershipList = await this.boardToMemberDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IBoardToMember_get_id): Promise<IBoardToMember> {
    // checking if the member exists
    const membership = await this.boardToMemberDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardToMember_create): Promise<IBoardToMember> {
    const newMembership = await this.boardToMemberDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardToMember_update): Promise<IBoardToMember> {
    const updateMembership = await this.boardToMemberDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardToMember_delete): Promise<IBoardToMember> {
    // checking if the member exists
    const membership = await this.boardToMemberDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.boardToMemberDBService.delete(membership);
    return deleteMembership;
  }
}
