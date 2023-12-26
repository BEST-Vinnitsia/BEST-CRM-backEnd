import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorCommitteeToMemberDbCreate,
  ICoordinatorCommitteeToMemberDbCreateRes,
  ICoordinatorCommitteeToMemberDbGetById,
  ICoordinatorCommitteeToMemberDbGetByIdRes,
  ICoordinatorCommitteeToMemberDbGetListRes,
} from 'src/types/coordinatorCommitteeToMember.type';

@Injectable()
export class CoordinatorCommitteeToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    coordinator_id,
    member_id,
    cadence_id,
  }: ICoordinatorCommitteeToMemberDbCreate): Promise<ICoordinatorCommitteeToMemberDbCreateRes> {
    const lga = await handlerError(
      this.database.member_to_coordinator_committee.create({ data: { coordinator_id, member_id, cadence_id } }),
    );
    return lga;
  }

  public async findAll(): Promise<ICoordinatorCommitteeToMemberDbGetListRes[]> {
    const lga = await handlerError(this.database.member_to_coordinator_committee.findMany());
    return lga;
  }

  public async findById({
    id,
  }: ICoordinatorCommitteeToMemberDbGetById): Promise<ICoordinatorCommitteeToMemberDbGetByIdRes> {
    const lga = await handlerError(this.database.member_to_coordinator_committee.findUnique({ where: { id } }));
    return lga;
  }
}
