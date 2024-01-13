import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MembershipDbService } from './membership.db.service';
import { IMembership, IMembershipCreate, IMembershipDelete, IMembershipGetById, IMembershipUpdate } from 'src/interfaces/member/membership.type';

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
  public async getById(data: IMembershipGetById): Promise<IMembership> {
    const membership = await this.membershipDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('membership not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMembershipCreate): Promise<IMembership> {
    const membership = await this.membershipDBService.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('membership is exist');

    const membershipNew = await this.membershipDBService.create(data);
    return membershipNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMembershipUpdate): Promise<IMembership> {
    const membershipById = await this.membershipDBService.checkById({ id: data.id });
    if (!membershipById) throw new NotFoundException('membership is not exist');

    const membershipUpdate = await this.membershipDBService.update(data);
    return membershipUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMembershipDelete): Promise<IMembership> {
    const membershipById = await this.membershipDBService.checkById({ id: data.id });
    if (!membershipById) throw new NotFoundException('membership is not exist');

    // const membershipUse = await this.appDBService.findListByMembership({ membershipId: membership.id });
    // if (membershipUse) throw new BadRequestException(['Change the membership of these members', membershipUse]);

    const membershipDelete = await this.membershipDBService.delete(data);
    return membershipDelete;
  }
}
