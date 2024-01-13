import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardToMemberDbService } from './board-to-member.db.service';
import {
  IBoardToMember,
  IBoardToMemberCreate,
  IBoardToMemberDelete,
  IBoardToMemberGetById,
  IBoardToMemberUpdate,
} from 'src/types/board-to-member.interface';

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
  public async getById(data: IBoardToMemberGetById): Promise<IBoardToMember> {
    // checking if the member exists
    const membership = await this.boardToMemberDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardToMemberCreate): Promise<IBoardToMember> {
    const newMembership = await this.boardToMemberDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardToMemberUpdate): Promise<IBoardToMember> {
    const updateMembership = await this.boardToMemberDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardToMemberDelete): Promise<IBoardToMember> {
    // checking if the member exists
    const membership = await this.boardToMemberDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.boardToMemberDBService.delete(membership);
    return deleteMembership;
  }
}
