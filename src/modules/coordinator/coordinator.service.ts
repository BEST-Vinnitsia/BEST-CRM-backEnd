import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ICoordinator, ICoordinatorCreate, ICoordinatorDelete, ICoordinatorGetById, ICoordinatorUpdate } from 'src/interfaces/coordinator.interface';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CoordinatorService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinator[]> {
    const coordinatorList = await this.prisma.coordinator.findMany();

    return coordinatorList;
  }

  // get by id
  public async getById(data: ICoordinatorGetById): Promise<ICoordinator> {
    const coordinator = await this.prisma.coordinator.findUnique({ where: { id: data.id } });
    if (!coordinator) throw new NotFoundException('cadence not found');

    return coordinator;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorCreate): Promise<ICoordinator> {
    const coordinator = await this.checkByName({ name: data.name });
    if (coordinator) throw new BadRequestException('cadence is exist');

    const coordinatorNew = await this.prisma.coordinator.create({
      data: {
        name: data.name,
        isActive: data.isActive,
        committeeIsActive: data.committeeIsActive,
      },
    });

    return coordinatorNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorUpdate): Promise<ICoordinator> {
    const coordinatorById = await this.checkById({ id: data.id });
    if (!coordinatorById) throw new NotFoundException('cadence not found');

    // const coordinatorByName = await this.coordinatorDBService.checkByName({ name: data.name });
    // if (coordinatorByName) throw new BadRequestException('cadence is exist');

    const coordinatorUpdate = await this.prisma.coordinator.update({
      where: { id: data.id },
      data: {
        isActive: data.isActive,
        committeeIsActive: data.committeeIsActive,
      },
    });

    return coordinatorUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorDelete): Promise<ICoordinator> {
    const coordinator = await this.checkById({ id: data.id });
    if (!coordinator) throw new NotFoundException('cadence is not exist');

    const coordinatorDelete = await this.prisma.coordinator.delete({ where: { id: data.id } });

    return coordinatorDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<ICoordinator> {
    const coordinator = await this.prisma.coordinator.findUnique({ where: { id } });
    return coordinator;
  }

  // check by number
  private async checkByName({ name }: { name: string }): Promise<ICoordinator> {
    const coordinator = await this.prisma.coordinator.findUnique({ where: { name } });
    return coordinator;
  }
}
