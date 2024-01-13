import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorDbService } from './coordinator.db.service';
import { ICoordinator, ICoordinator_create, ICoordinator_delete, ICoordinator_get_id, ICoordinator_update } from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorDBService: CoordinatorDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinator[]> {
    const membershipList = await this.coordinatorDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ICoordinator_get_id): Promise<ICoordinator> {
    // checking if the member exists
    const membership = await this.coordinatorDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinator_create): Promise<ICoordinator> {
    // checking if the member exists
    const membership = await this.coordinatorDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('cadence is exist');

    const newMembership = await this.coordinatorDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinator_update): Promise<ICoordinator> {
    const updateMembership = await this.coordinatorDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinator_delete): Promise<ICoordinator> {
    // checking if the member exists
    const membership = await this.coordinatorDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.coordinatorDBService.delete(membership);
    return deleteMembership;
  }
}
