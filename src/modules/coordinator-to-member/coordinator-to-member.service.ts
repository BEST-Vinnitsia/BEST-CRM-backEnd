import { BadRequestException, Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import {
  ICoordinatorToMember,
  ICoordinatorToMemberCreate,
  ICoordinatorToMemberDelete,
  ICoordinatorToMemberGetById,
  ICoordinatorToMemberUpdate,
} from 'src/interfaces/coordinator-to-member.interface';
import { MembershipEnum } from 'src/constants/enums.constant';
import { ErrorLoggingFilter } from 'src/common/filters';
import { IMember } from 'src/interfaces/member/member.type';
import { IMembership } from 'src/interfaces/member/membership.type';
import { ICoordinator } from 'src/interfaces/coordinator.interface';
import { ICadence } from 'src/interfaces/cadence.interface';
import { DatabaseService } from '../database/database.service';

@UseFilters(ErrorLoggingFilter)
@Injectable()
export class CoordinatorToMemberService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinatorToMember[]> {
    const coordinatorToMemberList = await this.prisma.coordinatorToMember.findMany();

    return coordinatorToMemberList;
  }

  // get by id
  public async getById(data: ICoordinatorToMemberGetById): Promise<ICoordinatorToMember> {
    const coordinatorToMember = await this.prisma.coordinatorToMember.findUnique({ where: { id: data.id } });
    if (!coordinatorToMember) throw new NotFoundException('coordinator to member not found');

    return coordinatorToMember;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorToMemberCreate): Promise<ICoordinatorToMember> {
    const memberById = await this.checkMemberAndMembership({ memberId: data.memberId });
    if (!memberById) throw new NotFoundException('member is not found');
    if (
      (memberById.membership.name !== MembershipEnum.BABY && data.isLeader === true) ||
      (memberById.membership.name !== MembershipEnum.FULL && data.isLeader === true) ||
      (memberById.membership.name !== MembershipEnum.ALUMNI && data.isLeader === true)
    )
      throw new BadRequestException('member is not have Baby Full or Alumni membership');

    const cadenceById = await this.checkCadenceById({ cadenceId: data.cadenceId });
    if (!cadenceById) throw new NotFoundException('cadence is not found');

    const coordinatorById = await this.checkCoordinatorById({ coordinatorId: data.coordinatorId });
    if (!coordinatorById) throw new NotFoundException('board is not found');

    const coordinatorToMember = await this.prisma.coordinatorToMember.create({
      data: {
        cadenceId: data.cadenceId,
        coordinatorId: data.coordinatorId,
        memberId: data.memberId,
        isLeader: data.isLeader,
      },
    });

    return coordinatorToMember;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorToMemberUpdate): Promise<ICoordinatorToMember> {
    const coordinatorToMemberById = await this.checkById({ id: data.id });
    if (!coordinatorToMemberById) throw new NotFoundException('coordinator to member is not exist');

    const coordinatorToMember = await this.prisma.coordinatorToMember.update({
      where: { id: data.id },
      data: {
        cadenceId: data.cadenceId,
        coordinatorId: data.coordinatorId,
        memberId: data.memberId,
        isLeader: data.isLeader,
      },
    });

    return coordinatorToMember;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorToMemberDelete): Promise<ICoordinatorToMember> {
    const coordinatorToMemberById = await this.checkById({ id: data.id });
    if (!coordinatorToMemberById) throw new NotFoundException('coordinator to member is not exist');

    const coordinatorToMemberDelete = await this.prisma.coordinatorToMember.delete({ where: { id: data.id } });

    return coordinatorToMemberDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<ICoordinatorToMember> {
    const board = await this.prisma.coordinatorToMember.findUnique({ where: { id } });
    return board;
  }

  // check by cadence
  private async checkCadenceById({ cadenceId }: { cadenceId: string }): Promise<ICadence> {
    const cadence = await this.prisma.cadence.findUnique({ where: { id: cadenceId } });
    return cadence;
  }

  // check coordinator by id
  private async checkCoordinatorById({ coordinatorId }: { coordinatorId: string }): Promise<ICoordinator> {
    const coordinator = await this.prisma.coordinator.findUnique({ where: { id: coordinatorId } });
    return coordinator;
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
