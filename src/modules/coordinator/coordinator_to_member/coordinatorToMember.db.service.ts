import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorToMember_Db_Create,
  ICoordinatorToMember_Db_Create_Res,
  ICoordinatorToMember_Db_GetById,
  ICoordinatorToMember_Db_GetById_Res,
  ICoordinatorToMember_Db_GetList_Res,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ coordinator_id, member_id, cadence_id }: ICoordinatorToMember_Db_Create): Promise<ICoordinatorToMember_Db_Create_Res> {
    const lga = await handlerError(this.database.member_to_coordinator.create({ data: { coordinator_id, member_id, cadence_id } }));
    return lga;
  }

  public async findAll(): Promise<ICoordinatorToMember_Db_GetList_Res[]> {
    const lga = await handlerError(this.database.member_to_coordinator.findMany());
    return lga;
  }

  public async findById({ id }: ICoordinatorToMember_Db_GetById): Promise<ICoordinatorToMember_Db_GetById_Res> {
    const lga = await handlerError(this.database.member_to_coordinator.findUnique({ where: { id } }));
    return lga;
  }
}
