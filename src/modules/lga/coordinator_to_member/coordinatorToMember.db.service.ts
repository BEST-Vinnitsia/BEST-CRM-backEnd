import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorToMemberDbCreate,
  ICoordinatorToMemberDbCreateRes,
  ICoordinatorToMemberDbGetById,
  ICoordinatorToMemberDbGetByIdRes,
  ICoordinatorToMemberDbGetListRes,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    coordinator_id,
    member_id,
    cadence_id,
  }: ICoordinatorToMemberDbCreate): Promise<ICoordinatorToMemberDbCreateRes> {
    const lga = await handlerError(
      this.database.member_to_coordinator.create({ data: { coordinator_id, member_id, cadence_id } }),
    );
    return lga;
  }

  public async findAll(): Promise<ICoordinatorToMemberDbGetListRes[]> {
    const lga = await handlerError(this.database.member_to_coordinator.findMany());
    return lga;
  }

  public async findById({ id }: ICoordinatorToMemberDbGetById): Promise<ICoordinatorToMemberDbGetByIdRes> {
    const lga = await handlerError(this.database.member_to_coordinator.findUnique({ where: { id } }));
    return lga;
  }
}
