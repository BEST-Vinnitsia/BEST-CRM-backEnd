import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BoardToMemberDbService } from './board-to-member.db.service';
import {
  IBoardToMember,
  IBoardToMemberCreate,
  IBoardToMemberDelete,
  IBoardToMemberGetById,
  IBoardToMemberUpdate,
} from 'src/interfaces/board-to-member.interface';
import { MembershipEnum } from 'src/constants/enums.constant';

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
    const memberById = await this.boardToMemberDBService.checkMemberAndMembership({ memberId: data.memberId });
    if (!memberById) throw new NotFoundException('member is not found');
    if (
      (memberById.membership.name !== MembershipEnum.FULL && data.isLeader === true) ||
      (memberById.membership.name !== MembershipEnum.ALUMNI && data.isLeader === true)
    )
      throw new BadRequestException('member is not have Full membership');

    const cadenceById = await this.boardToMemberDBService.checkCadenceById({ cadenceId: data.cadenceId });
    if (!cadenceById) throw new NotFoundException('cadence is not found');

    const boardById = await this.boardToMemberDBService.checkBoardById({ boardId: data.boardId });
    if (!boardById) throw new NotFoundException('board is not found');

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
