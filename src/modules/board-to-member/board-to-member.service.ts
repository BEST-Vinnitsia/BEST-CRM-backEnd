import { BadRequestException, Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import {
  IBoardToMember,
  IBoardToMemberCreate,
  IBoardToMemberDelete,
  IBoardToMemberGetById,
  IBoardToMemberUpdate,
} from 'src/interfaces/board-to-member.interface';
import { MembershipEnum } from 'src/constants/enums.constant';
import { DatabaseService } from '../database/database.service';
import { IMember } from 'src/interfaces/member/member.type';
import { IMembership } from 'src/interfaces/member/membership.type';
import { IBoard } from 'src/interfaces/board.interface';
import { ICadence } from 'src/interfaces/cadence.interface';
import { ErrorLoggingFilter } from 'src/common/filters';

@UseFilters(ErrorLoggingFilter)
@Injectable()
export class BoardToMemberService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IBoardToMember[]> {
    const boardToMemberList = await this.prisma.boardToMember.findMany();

    return boardToMemberList;
  }

  // get by id
  public async getById(data: IBoardToMemberGetById): Promise<IBoardToMember> {
    const boardToMember = await this.prisma.boardToMember.findUnique({ where: { id: data.id } });
    if (!boardToMember) throw new NotFoundException('board to member not found');
    return boardToMember;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IBoardToMemberCreate): Promise<IBoardToMember> {
    const memberById = await this.checkMemberAndMembership({ memberId: data.memberId });
    if (!memberById) throw new NotFoundException('member is not found');
    if (
      (memberById.membership.name !== MembershipEnum.FULL && data.isLeader === true) ||
      (memberById.membership.name !== MembershipEnum.ALUMNI && data.isLeader === true)
    )
      throw new BadRequestException('member is not have Full membership');

    const cadenceById = await this.checkCadenceById({ cadenceId: data.cadenceId });
    if (!cadenceById) throw new NotFoundException('cadence is not found');

    const boardById = await this.checkBoardById({ boardId: data.boardId });
    if (!boardById) throw new NotFoundException('board is not found');

    const boardToMember = await this.prisma.boardToMember.create({
      data: {
        cadenceId: data.cadenceId,
        boardId: data.boardId,
        memberId: data.memberId,
        isLeader: data.isLeader,
      },
    });

    return boardToMember;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IBoardToMemberUpdate): Promise<IBoardToMember> {
    const boardToMember = await this.checkById({ id: data.id });
    if (!boardToMember) throw new NotFoundException('board to member not found');

    const boardToMemberUpdate = this.prisma.boardToMember.update({
      where: { id: data.id },
      data: {
        cadenceId: data.cadenceId,
        boardId: data.boardId,
        memberId: data.memberId,
        isLeader: data.isLeader,
      },
    });

    return boardToMemberUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IBoardToMemberDelete): Promise<IBoardToMember> {
    const boardToMember = await this.checkById({ id: data.id });
    if (!boardToMember) throw new NotFoundException('board to member is not exist');

    const boardToMemberDelete = await this.prisma.boardToMember.delete({ where: { id: data.id } });

    return boardToMemberDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<IBoardToMember> {
    const board = await this.prisma.boardToMember.findUnique({ where: { id } });
    return board;
  }

  // check by cadence
  private async checkCadenceById({ cadenceId }: { cadenceId: string }): Promise<ICadence> {
    const cadence = await this.prisma.cadence.findUnique({ where: { id: cadenceId } });
    return cadence;
  }

  // check Board by id
  private async checkBoardById({ boardId }: { boardId: string }): Promise<IBoard> {
    const board = await this.prisma.board.findUnique({ where: { id: boardId } });
    return board;
  }

  // check member and membership
  private async checkMemberAndMembership({ memberId }: { memberId: string }): Promise<IMember & { membership: IMembership }> {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId },
      include: { membership: true },
    });

    return member;
  }
}
