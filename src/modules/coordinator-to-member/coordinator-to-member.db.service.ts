import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorToMember,
  ICoordinatorToMemberCreate,
  ICoordinatorToMemberGetById,
  ICoordinatorToMemberUpdate,
  ICoordinatorToMemberDelete,
} from 'src/interfaces/coordinator-to-member.interface';
import { ICadence } from 'src/interfaces/cadence.interface';
import { ICoordinator } from 'src/interfaces/coordinator.interface';
import { IMember } from 'src/interfaces/member/member.type';
import { IMembership } from 'src/interfaces/member/membership.type';

@Injectable()
export class CoordinatorToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICoordinatorToMemberCreate): Promise<ICoordinatorToMember> {
    const board = await handlerError(
      this.database.coordinatorToMember.create({
        data: {
          cadenceId: data.cadenceId,
          coordinatorId: data.coordinatorId,
          memberId: data.memberId,
          isLeader: data.isLeader,
        },
      }),
    );
    return board;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<ICoordinatorToMember[]> {
    const board = await handlerError(this.database.coordinatorToMember.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: ICoordinatorToMemberGetById): Promise<ICoordinatorToMember> {
    const board = await handlerError(this.database.coordinatorToMember.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICoordinatorToMemberUpdate): Promise<ICoordinatorToMember> {
    const board = await handlerError(
      this.database.coordinatorToMember.update({
        where: { id: data.id },
        data: {
          cadenceId: data.cadenceId,
          coordinatorId: data.coordinatorId,
          memberId: data.memberId,
          isLeader: data.isLeader,
        },
      }),
    );
    return board;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorToMemberDelete): Promise<ICoordinatorToMember> {
    const board = await handlerError(this.database.coordinatorToMember.delete({ where: { id: data.id } }));
    return board;
  }

  /* ----------------  CHECK  ---------------- */

  // check by id
  public async checkById({ id }: { id: string }): Promise<ICoordinatorToMember> {
    const board = await handlerError(this.database.coordinatorToMember.findUnique({ where: { id } }));
    return board;
  }

  // check by cadence
  public async checkCadenceById({ cadenceId }: { cadenceId: string }): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id: cadenceId } }));
    return cadence;
  }

  // check coordinator by id
  public async checkCoordinatorById({ coordinatorId }: { coordinatorId: string }): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { id: coordinatorId } }));
    return coordinator;
  }

  // check member and membership
  public async checkMemberAndMembership({ memberId }: { memberId: string }): Promise<IMember & { membership: IMembership }> {
    const member = await handlerError(
      this.database.member.findFirst({
        where: { id: memberId },
        include: { membership: true },
      }),
    );
    return member;
  }
}
