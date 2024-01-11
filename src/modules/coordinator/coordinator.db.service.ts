import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinator_create,
  ICoordinator_create_RES,
  ICoordinator_get_id,
  ICoordinator_get_id_RES,
  ICoordinator_get_list_RES,
  ICoordinator_update,
  ICoordinator_update_RES,
  ICoordinator_delete,
  ICoordinator_delete_RES,
  ICoordinator_check_name,
  ICoordinator_check_name_RES,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICoordinator_create): Promise<ICoordinator_create_RES> {
    const coordinator = await handlerError(
      this.database.coordinator.create({
        data: {
          name: data.name,
          isActive: data.isActive,
          committeeIsActive: data.committeeIsActive,
        },
      }),
    );
    return coordinator;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<ICoordinator_get_list_RES[]> {
    const coordinator = await handlerError(this.database.coordinator.findMany());
    return coordinator;
  }

  // find by id
  public async findById({ id }: ICoordinator_get_id): Promise<ICoordinator_get_id_RES> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return coordinator;
  }

  // check by number
  public async checkByName({ name }: ICoordinator_check_name): Promise<ICoordinator_check_name_RES> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { name } }));
    return coordinator;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICoordinator_update): Promise<ICoordinator_update_RES> {
    const coordinator = await handlerError(
      this.database.coordinator.update({
        where: { id: data.id },
        data: {
          isActive: data.isActive,
          committeeIsActive: data.committeeIsActive,
        },
      }),
    );
    return coordinator;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinator_delete): Promise<ICoordinator_delete_RES> {
    const coordinator = await handlerError(this.database.coordinator.delete({ where: { id: data.id } }));
    return coordinator;
  }
}
