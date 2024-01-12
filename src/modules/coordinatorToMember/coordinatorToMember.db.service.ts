import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorToMember_create,
  ICoordinatorToMember_create_RES,
  ICoordinatorToMember_get_id,
  ICoordinatorToMember_get_id_RES,
  ICoordinatorToMember_get_list_RES,
  ICoordinatorToMember_update,
  ICoordinatorToMember_update_RES,
  ICoordinatorToMember_delete,
  ICoordinatorToMember_delete_RES,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICoordinatorToMember_create): Promise<ICoordinatorToMember_create_RES> {
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
  public async findMany(): Promise<ICoordinatorToMember_get_list_RES[]> {
    const board = await handlerError(this.database.coordinatorToMember.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: ICoordinatorToMember_get_id): Promise<ICoordinatorToMember_get_id_RES> {
    const board = await handlerError(this.database.coordinatorToMember.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICoordinatorToMember_update): Promise<ICoordinatorToMember_update_RES> {
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
  public async delete(data: ICoordinatorToMember_delete): Promise<ICoordinatorToMember_delete_RES> {
    const board = await handlerError(this.database.coordinatorToMember.delete({ where: { id: data.id } }));
    return board;
  }
}
