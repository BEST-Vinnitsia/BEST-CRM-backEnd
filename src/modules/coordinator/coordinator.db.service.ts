import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinator,
  ICoordinator_create,
  ICoordinator_get_id,
  ICoordinator_update,
  ICoordinator_delete,
  ICoordinator_check_name,
} from 'src/types/coordinator.interface';

@Injectable()
export class CoordinatorDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICoordinator_create): Promise<ICoordinator> {
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
  public async findMany(): Promise<ICoordinator[]> {
    const coordinator = await handlerError(this.database.coordinator.findMany());
    return coordinator;
  }

  // find by id
  public async findById({ id }: ICoordinator_get_id): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return coordinator;
  }

  // check by number
  public async checkByName({ name }: ICoordinator_check_name): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { name } }));
    return coordinator;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICoordinator_update): Promise<ICoordinator> {
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
  public async delete(data: ICoordinator_delete): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.delete({ where: { id: data.id } }));
    return coordinator;
  }
}
