import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MembershipDbService } from './membership.db.service';
import { IMembership, IMembership_create, IMembership_delete, IMembership_get_id, IMembership_update } from 'src/types/member/membership.type';

@Injectable()
export class MembershipService {
  constructor(private readonly membershipDBService: MembershipDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMembership[]> {
    const membershipList = await this.membershipDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IMembership_get_id): Promise<IMembership> {
    // checking if the member exists
    const membership = await this.membershipDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('membership not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMembership_create): Promise<IMembership> {
    // checking if the member exists
    const membership = await this.membershipDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('membership is exist');

    const newMembership = await this.membershipDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMembership_update): Promise<IMembership> {
    // checking if the member exists
    const membership = await this.membershipDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('membership is exist');

    const updateMembership = await this.membershipDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMembership_delete): Promise<IMembership> {
    // checking if the member exists
    const membership = await this.membershipDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('membership is not exist');

    // const membershipUse = await this.appDBService.findListByMembership({ membershipId: membership.id });
    // if (membershipUse) throw new BadRequestException(['Change the membership of these members', membershipUse]);

    const deleteMembership = await this.membershipDBService.delete(membership);
    return deleteMembership;
  }
}
