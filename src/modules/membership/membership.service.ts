import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IMembership, IMembershipCreate, IMembershipDelete, IMembershipGetById, IMembershipUpdate } from 'src/interfaces/member/membership.type';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MembershipService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMembership[]> {
    const membershipList = await this.prisma.membership.findMany();

    return membershipList;
  }

  // get by id
  public async getById(data: IMembershipGetById): Promise<IMembership> {
    const membership = await this.prisma.membership.findUnique({ where: { id: data.id } });
    if (!membership) throw new NotFoundException('membership not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMembershipCreate): Promise<IMembership> {
    const membership = await this.checkByName({ name: data.name });
    if (membership) throw new BadRequestException('membership is exist');

    const membershipNew = await this.prisma.membership.create({
      data: { name: data.name.toLocaleLowerCase() },
    });

    return membershipNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMembershipUpdate): Promise<IMembership> {
    const membershipById = await this.checkById({ id: data.id });
    if (!membershipById) throw new NotFoundException('membership is not exist');

    const membershipUpdate = await this.prisma.membership.update({
      where: { id: data.id },
      data: { name: data.name.toLocaleLowerCase() },
    });

    return membershipUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMembershipDelete): Promise<IMembership> {
    const membershipById = await this.checkById({ id: data.id });
    if (!membershipById) throw new NotFoundException('membership is not exist');

    // const membershipUse = await this.appDBService.findListByMembership({ membershipId: membership.id });
    // if (membershipUse) throw new BadRequestException(['Change the membership of these members', membershipUse]);

    const membershipDelete = await this.prisma.membership.delete({ where: { id: data.id } });

    return membershipDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<IMembership> {
    const membership = await this.prisma.membership.findUnique({ where: { id } });
    return membership;
  }

  // check by name
  private async checkByName({ name }: { name: string }): Promise<IMembership> {
    const membership = await this.prisma.membership.findUnique({ where: { name: name.toLocaleLowerCase() } });
    return membership;
  }
}
