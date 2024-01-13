import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorToMember,
  ICoordinatorToMember_create,
  ICoordinatorToMember_get_id,
  ICoordinatorToMember_update,
  ICoordinatorToMember_delete,
} from 'src/types/coordinator-to-member.interface';

@Injectable()
export class CoordinatorToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICoordinatorToMember_create): Promise<ICoordinatorToMember> {
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
  public async findById({ id }: ICoordinatorToMember_get_id): Promise<ICoordinatorToMember> {
    const board = await handlerError(this.database.coordinatorToMember.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICoordinatorToMember_update): Promise<ICoordinatorToMember> {
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
  public async delete(data: ICoordinatorToMember_delete): Promise<ICoordinatorToMember> {
    const board = await handlerError(this.database.coordinatorToMember.delete({ where: { id: data.id } }));
    return board;
  }
}
