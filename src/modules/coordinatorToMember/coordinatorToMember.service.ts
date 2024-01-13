import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinatorToMember.db.service';
import {
  ICoordinatorToMember,
  ICoordinatorToMember_create,
  ICoordinatorToMember_delete,
  ICoordinatorToMember_get_id,
  ICoordinatorToMember_update,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberService {
  constructor(private readonly coordinatorToMemberDBService: CoordinatorToMemberDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICoordinatorToMember[]> {
    const membershipList = await this.coordinatorToMemberDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ICoordinatorToMember_get_id): Promise<ICoordinatorToMember> {
    // checking if the member exists
    const membership = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorToMember_create): Promise<ICoordinatorToMember> {
    const newMembership = await this.coordinatorToMemberDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorToMember_update): Promise<ICoordinatorToMember> {
    const updateMembership = await this.coordinatorToMemberDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorToMember_delete): Promise<ICoordinatorToMember> {
    // checking if the member exists
    const membership = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.coordinatorToMemberDBService.delete(membership);
    return deleteMembership;
  }
}
