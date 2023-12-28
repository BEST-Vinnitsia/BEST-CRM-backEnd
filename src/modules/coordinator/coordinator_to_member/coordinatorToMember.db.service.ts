import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorToMember_Db_Create,
  ICoordinatorToMember_Db_Create_Res,
  ICoordinatorToMember_Db_GetById,
  ICoordinatorToMember_Db_GetById_Res,
  ICoordinatorToMember_Db_GetList_Res,
  ICoordinatorToMember_Db_GetCadenceById,
  ICoordinatorToMember_Db_GetCadenceById_Res,
  ICoordinatorToMember_Db_GetByMemberIdCoordinatorIdCadenceId,
  ICoordinatorToMember_Db_GetByMemberIdCoordinatorIdCadenceId_Res,
  ICoordinatorToMember_Db_GetList,
  ICoordinatorToMember_Db_GetAllList,
  ICoordinatorToMember_Db_GetAllList_Res,
} from 'src/types/coordinatorToMember.type';

@Injectable()
export class CoordinatorToMemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create coordinatorToMember
   */
  public async create({ coordinator_id, member_id, cadence_id }: ICoordinatorToMember_Db_Create): Promise<ICoordinatorToMember_Db_Create_Res> {
    const newCoordinatorToMember = await handlerError(
      this.database.member_to_coordinator.create({
        data: {
          coordinator_id,
          member_id,
          cadence_id,
        },
      }),
    );
    return newCoordinatorToMember;
  }

  /**
   * get coordinatorToMember list
   */
  public async findAll({ cadence_id, coordinator_id }: ICoordinatorToMember_Db_GetList): Promise<ICoordinatorToMember_Db_GetList_Res[]> {
    const coordinatorToMemberList = await handlerError(
      this.database.member_to_coordinator.findMany({
        where: {
          coordinator_id,
          cadence_id,
        },
      }),
    );
    return coordinatorToMemberList;
  }

  /**
   * get coordinatorToMember by cadence_id
   */
  public async findAllByCadenceId({ cadence_id }: ICoordinatorToMember_Db_GetAllList): Promise<ICoordinatorToMember_Db_GetAllList_Res[]> {
    const coordinatorToMemberList = await handlerError(
      this.database.member_to_coordinator.findMany({
        where: {
          cadence_id,
        },
      }),
    );
    return coordinatorToMemberList;
  }

  /**
   * get coordinatorToMember by id
   */
  public async findById({ id }: ICoordinatorToMember_Db_GetById): Promise<ICoordinatorToMember_Db_GetById_Res> {
    const coordinatorToMember = await handlerError(
      this.database.member_to_coordinator.findUnique({
        where: {
          id,
        },
      }),
    );
    return coordinatorToMember;
  }

  /**
   * get coordinatorToMember by member id & cadence id & coordinator id
   */
  public async findByMemberId_CadenceId_CoordinatorId({
    member_id,
    cadence_id,
    coordinator_id,
  }: ICoordinatorToMember_Db_GetByMemberIdCoordinatorIdCadenceId): Promise<ICoordinatorToMember_Db_GetByMemberIdCoordinatorIdCadenceId_Res> {
    const coordinatorToMember = await handlerError(
      this.database.member_to_coordinator.findFirst({
        where: { member_id, cadence_id, coordinator_id },
      }),
    );
    return coordinatorToMember;
  }

  /**
   * get coordinatorToMember by cadence id
   */
  public async findByCadenceId({ cadence_id }: ICoordinatorToMember_Db_GetCadenceById): Promise<ICoordinatorToMember_Db_GetCadenceById_Res[]> {
    const coordinatorToMember = await handlerError(
      this.database.member_to_coordinator.findMany({
        where: { cadence_id },
      }),
    );
    return coordinatorToMember;
  }
}
