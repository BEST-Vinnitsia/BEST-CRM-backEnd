import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorDbService } from './coordinator.db.service';
import {
  ICoordinator_create,
  ICoordinator_create_RES,
  ICoordinator_delete,
  ICoordinator_delete_RES,
  ICoordinator_get_id,
  ICoordinator_get_id_RES,
  ICoordinator_get_list_RES,
  ICoordinator_update,
  ICoordinator_update_RES,
} from 'src/types/coordinator.type';
import { AppDbService } from '../app/app.db.service';

@Injectable()
export class CoordinatorService {
  constructor(
    private readonly coordinatorDBService: CoordinatorDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinator_get_list_RES[]> {
    const membershipList = await this.coordinatorDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ICoordinator_get_id): Promise<ICoordinator_get_id_RES> {
    // checking if the member exists
    const membership = await this.coordinatorDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinator_create): Promise<ICoordinator_create_RES> {
    // checking if the member exists
    const membership = await this.coordinatorDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('cadence is exist');

    const newMembership = await this.coordinatorDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinator_update): Promise<ICoordinator_update_RES> {
    const updateMembership = await this.coordinatorDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinator_delete): Promise<ICoordinator_delete_RES> {
    // checking if the member exists
    const membership = await this.coordinatorDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.coordinatorDBService.delete(membership);
    return deleteMembership;
  }
}
