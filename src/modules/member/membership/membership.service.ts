import { Injectable, BadRequestException } from '@nestjs/common';
import { MembershipDbService } from './membership.db.service';
import {
  IMembership_Create,
  IMembership_Create_Res,
  IMembership_GetById,
  IMembership_GetById_Res,
  IMembership_GetList_Res,
} from 'src/types/membership.type';
import { membershipName } from 'src/constants/membershipName';

@Injectable()
export class MembershipService {
  constructor(private readonly membershipDb: MembershipDbService) {}

  /**
   * create membership
   */
  public async create(data: IMembership_Create): Promise<IMembership_Create_Res> {
    // checking membership name
    if (!membershipName.includes(data.name.toLocaleLowerCase())) throw new BadRequestException('membership name is not correct');

    // checking if the membership is exist
    const membership = await this.membershipDb.findByName({ name: data.name });
    if (membership) throw new BadRequestException('this membership is exist');

    const newMembership = await this.membershipDb.create(data);
    return newMembership;
  }

  /**
   * get membership list
   */
  public async getList(): Promise<IMembership_GetList_Res[]> {
    const membershipList = await this.membershipDb.findAll();
    return membershipList;
  }

  /**
   * get membership by id
   */
  public async getById(data: IMembership_GetById): Promise<IMembership_GetById_Res> {
    // checking if the membership is exist
    const membership = await this.membershipDb.findById({ id: data.id });
    if (!membership) throw new BadRequestException('this membership is not exist');

    return membership;
  }
}
