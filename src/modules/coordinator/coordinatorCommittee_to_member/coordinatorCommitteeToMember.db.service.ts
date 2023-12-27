import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorCommitteeToMember_Db_Create,
  ICoordinatorCommitteeToMember_Db_Create_Res,
  ICoordinatorCommitteeToMember_Db_GetById,
  ICoordinatorCommitteeToMember_Db_GetById_Res,
  ICoordinatorCommitteeToMember_Db_GetList_Res,
} from 'src/types/coordinatorCommitteeToMember.type';

@Injectable()
export class CoordinatorCommitteeToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    coordinator_id,
    member_id,
    cadence_id,
  }: ICoordinatorCommitteeToMember_Db_Create): Promise<ICoordinatorCommitteeToMember_Db_Create_Res> {
    const lga = await handlerError(this.database.member_to_coordinator_committee.create({ data: { coordinator_id, member_id, cadence_id } }));
    return lga;
  }

  public async findAll(): Promise<ICoordinatorCommitteeToMember_Db_GetList_Res[]> {
    const lga = await handlerError(this.database.member_to_coordinator_committee.findMany());
    return lga;
  }

  public async findById({ id }: ICoordinatorCommitteeToMember_Db_GetById): Promise<ICoordinatorCommitteeToMember_Db_GetById_Res> {
    const lga = await handlerError(this.database.member_to_coordinator_committee.findUnique({ where: { id } }));
    return lga;
  }
}
