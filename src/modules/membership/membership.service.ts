import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MembershipDbService } from './membership.db.service';
import {
  IMembership_create,
  IMembership_create_RES,
  IMembership_delete,
  IMembership_delete_RES,
  IMembership_get_id,
  IMembership_get_id_RES,
  IMembership_get_list_RES,
  IMembership_update,
  IMembership_update_RES,
} from 'src/types/member/membership.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class MembershipService {
  constructor(
    private readonly membershipDBService: MembershipDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMembership_get_list_RES[]> {
    const membershipList = await this.membershipDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IMembership_get_id): Promise<IMembership_get_id_RES> {
    // checking if the member exists
    const membership = await this.membershipDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('membership not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMembership_create): Promise<IMembership_create_RES> {
    // checking if the member exists
    const membership = await this.membershipDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('membership is exist');

    const newMembership = await this.membershipDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMembership_update): Promise<IMembership_update_RES> {
    // checking if the member exists
    const membership = await this.membershipDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('membership is exist');

    const updateMembership = await this.membershipDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMembership_delete): Promise<IMembership_delete_RES> {
    // checking if the member exists
    const membership = await this.membershipDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('membership is not exist');

    const membershipUse = await this.appDBService.findListByMembership({ membership_id: membership.id });
    if (membershipUse) throw new BadRequestException(['Change the membership of these members', membershipUse]);

    const deleteMembership = await this.membershipDBService.delete(membership);
    return deleteMembership;
  }
}
