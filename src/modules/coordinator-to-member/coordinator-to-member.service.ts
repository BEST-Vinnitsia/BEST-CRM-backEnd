import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinator-to-member.db.service';
import {
  ICoordinatorToMember,
  ICoordinatorToMemberCreate,
  ICoordinatorToMemberDelete,
  ICoordinatorToMemberGetById,
  ICoordinatorToMemberUpdate,
} from 'src/interfaces/coordinator-to-member.interface';

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
  public async getById(data: ICoordinatorToMemberGetById): Promise<ICoordinatorToMember> {
    // checking if the member exists
    const membership = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICoordinatorToMemberCreate): Promise<ICoordinatorToMember> {
    const newMembership = await this.coordinatorToMemberDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICoordinatorToMemberUpdate): Promise<ICoordinatorToMember> {
    const updateMembership = await this.coordinatorToMemberDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICoordinatorToMemberDelete): Promise<ICoordinatorToMember> {
    // checking if the member exists
    const membership = await this.coordinatorToMemberDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.coordinatorToMemberDBService.delete(membership);
    return deleteMembership;
  }
}
