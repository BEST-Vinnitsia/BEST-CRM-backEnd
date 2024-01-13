import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { ICoordinator, ICoordinatorCreate, ICoordinatorGetById, ICoordinatorUpdate, ICoordinatorDelete } from 'src/interfaces/coordinator.interface';

@Injectable()
export class CoordinatorDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICoordinatorCreate): Promise<ICoordinator> {
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
  public async findById({ id }: ICoordinatorGetById): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return coordinator;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICoordinatorUpdate): Promise<ICoordinator> {
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
  public async delete(data: ICoordinatorDelete): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.delete({ where: { id: data.id } }));
    return coordinator;
  }

  /* ----------------  CHECK  ---------------- */

  // check by id
  public async checkById({ id }: { id: string }): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return coordinator;
  }

  // check by number
  public async checkByName({ name }: { name: string }): Promise<ICoordinator> {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { name } }));
    return coordinator;
  }
}
