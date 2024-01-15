import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinator-to-member.db.service';
import {
  ICoordinatorToMember,
  ICoordinatorToMemberCreate,
  ICoordinatorToMemberDelete,
  ICoordinatorToMemberGetById,
  ICoordinatorToMemberUpdate,
} from 'src/interfaces/coordinator-to-member.interface';
import { MembershipEnum } from 'src/constants/enums.constant';

@Injectable()
export class CoordinatorToMemberService {
  constructor(private readonly coordinatorToMemberDBService: CoordinatorToMemberDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinatorToMember[]> {
    const coordinatorToMemberList = await this.coordinatorToMemberDBService.findMany();
    return coordinatorToMemberList;
  }

  // get by id
  public async getById(data: ICoordinatorToMemberGetById): Promise<ICoordinatorToMember> {
    const coordinatorToMember = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!coordinatorToMember) throw new NotFoundException('coordinator to member not found');

    return coordinatorToMember;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorToMemberCreate): Promise<ICoordinatorToMember> {
    const memberById = await this.coordinatorToMemberDBService.checkMemberAndMembership({ memberId: data.memberId });
    if (!memberById) throw new NotFoundException('member is not found');
    if (
      (memberById.membership.name !== MembershipEnum.BABY && data.isLeader === true) ||
      (memberById.membership.name !== MembershipEnum.FULL && data.isLeader === true) ||
      (memberById.membership.name !== MembershipEnum.ALUMNI && data.isLeader === true)
    )
      throw new BadRequestException('member is not have Baby Full or Alumni membership');

    const cadenceById = await this.coordinatorToMemberDBService.checkCadenceById({ cadenceId: data.cadenceId });
    if (!cadenceById) throw new NotFoundException('cadence is not found');

    const coordinatorById = await this.coordinatorToMemberDBService.checkCoordinatorById({ coordinatorId: data.coordinatorId });
    if (!coordinatorById) throw new NotFoundException('board is not found');

    const coordinatorToMember = await this.coordinatorToMemberDBService.create(data);
    return coordinatorToMember;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorToMemberUpdate): Promise<ICoordinatorToMember> {
    const coordinatorToMemberById = await this.coordinatorToMemberDBService.checkById({ id: data.id });
    if (!coordinatorToMemberById) throw new NotFoundException('coordinator to member is not exist');

    const coordinatorToMember = await this.coordinatorToMemberDBService.update(data);
    return coordinatorToMember;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorToMemberDelete): Promise<ICoordinatorToMember> {
    const coordinatorToMemberById = await this.coordinatorToMemberDBService.checkById({ id: data.id });
    if (!coordinatorToMemberById) throw new NotFoundException('coordinator to member is not exist');

    const coordinatorToMemberDelete = await this.coordinatorToMemberDBService.delete(data);
    return coordinatorToMemberDelete;
  }
}
