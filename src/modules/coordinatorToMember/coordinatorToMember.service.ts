import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinatorToMember.db.service';
import {
  ICoordinatorToMember_create,
  ICoordinatorToMember_create_RES,
  ICoordinatorToMember_delete,
  ICoordinatorToMember_delete_RES,
  ICoordinatorToMember_get_id,
  ICoordinatorToMember_get_id_RES,
  ICoordinatorToMember_get_list_RES,
  ICoordinatorToMember_update,
  ICoordinatorToMember_update_RES,
} from 'src/types/coordinatorToMember.type';
import { AppDbService } from '../app/app.db.service';

@Injectable()
export class CoordinatorToMemberService {
  constructor(
    private readonly coordinatorToMemberDBService: CoordinatorToMemberDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinatorToMember_get_list_RES[]> {
    const membershipList = await this.coordinatorToMemberDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ICoordinatorToMember_get_id): Promise<ICoordinatorToMember_get_id_RES> {
    // checking if the member exists
    const membership = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorToMember_create): Promise<ICoordinatorToMember_create_RES> {
    const newMembership = await this.coordinatorToMemberDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorToMember_update): Promise<ICoordinatorToMember_update_RES> {
    const updateMembership = await this.coordinatorToMemberDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorToMember_delete): Promise<ICoordinatorToMember_delete_RES> {
    // checking if the member exists
    const membership = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.coordinatorToMemberDBService.delete(membership);
    return deleteMembership;
  }
}
