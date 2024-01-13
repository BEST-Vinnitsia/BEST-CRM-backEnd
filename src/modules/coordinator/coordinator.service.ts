import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorDbService } from './coordinator.db.service';
import { ICoordinator, ICoordinatorCreate, ICoordinatorDelete, ICoordinatorGetById, ICoordinatorUpdate } from 'src/interfaces/coordinator.interface';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorDBService: CoordinatorDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinator[]> {
    const coordinatorList = await this.coordinatorDBService.findMany();
    return coordinatorList;
  }

  // get by id
  public async getById(data: ICoordinatorGetById): Promise<ICoordinator> {
    const coordinator = await this.coordinatorDBService.findById({ id: data.id });
    if (!coordinator) throw new NotFoundException('cadence not found');

    return coordinator;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorCreate): Promise<ICoordinator> {
    const coordinator = await this.coordinatorDBService.checkByName({ name: data.name });
    if (coordinator) throw new BadRequestException('cadence is exist');

    const coordinatorNew = await this.coordinatorDBService.create(data);
    return coordinatorNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorUpdate): Promise<ICoordinator> {
    const coordinatorById = await this.coordinatorDBService.checkById({ id: data.id });
    if (!coordinatorById) throw new NotFoundException('cadence not found');

    // const coordinatorByName = await this.coordinatorDBService.checkByName({ name: data.name });
    // if (coordinatorByName) throw new BadRequestException('cadence is exist');

    const coordinatorUpdate = await this.coordinatorDBService.update(data);
    return coordinatorUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorDelete): Promise<ICoordinator> {
    const coordinator = await this.coordinatorDBService.checkById({ id: data.id });
    if (!coordinator) throw new NotFoundException('cadence is not exist');

    const coordinatorDelete = await this.coordinatorDBService.delete(data);
    return coordinatorDelete;
  }
}
