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
}
