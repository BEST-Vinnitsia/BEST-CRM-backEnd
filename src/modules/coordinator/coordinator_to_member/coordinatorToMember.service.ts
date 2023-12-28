import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CoordinatorToMemberDbService } from './coordinatorToMember.db.service';
import {
  ICoordinatorToMember_Create,
  ICoordinatorToMember_Create_Res,
  ICoordinatorToMember_GetAllList,
  ICoordinatorToMember_GetAllList_Res,
  ICoordinatorToMember_GetByCadenceId,
  ICoordinatorToMember_GetByCadenceId_Res,
  ICoordinatorToMember_GetById,
  ICoordinatorToMember_GetById_Res,
  ICoordinatorToMember_GetList,
  ICoordinatorToMember_GetList_Res,
} from 'src/types/coordinatorToMember.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class CoordinatorToMemberService {
  constructor(
    private readonly coordinatorToMemberDb: CoordinatorToMemberDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create coordinatorToMember
   */
  async create(data: ICoordinatorToMember_Create): Promise<ICoordinatorToMember_Create_Res> {
    // check if coordinatorToMember is exist
    const coordinator = await this.coordinatorToMemberDb.findByMemberId_CadenceId_CoordinatorId({
      cadence_id: data.cadence_id,
      coordinator_id: data.coordinator_id,
      member_id: data.member_id,
    });
    if (coordinator) throw new BadRequestException('this coordinator is exist');

    const newCoordinatorToMember = await this.coordinatorToMemberDb.create(data);
    return newCoordinatorToMember;
  }

  /**
   * get coordinatorToMember list by coordinator_id and cadence_id
   */
  async getList(data: ICoordinatorToMember_GetList): Promise<ICoordinatorToMember_GetList_Res[]> {
    const coordinatorToMemberList = await this.coordinatorToMemberDb.findAll(data);
    return coordinatorToMemberList;
  }

  /**
   * get coordinatorToMember list by cadence_id
   */
  async getAllList(data: ICoordinatorToMember_GetAllList): Promise<ICoordinatorToMember_GetAllList_Res[]> {
    const coordinatorToMemberList = await this.coordinatorToMemberDb.findAllByCadenceId(data);
    return coordinatorToMemberList;
  }

  /**
   * get coordinatorToMember by member id & cadence id & coordinator id
   */
  async getById(data: ICoordinatorToMember_GetById): Promise<ICoordinatorToMember_GetById_Res> {
    // check if coordinatorToMember is exist
    const coordinatorToMember = await this.coordinatorToMemberDb.findById(data);
    if (!coordinatorToMember) throw new NotFoundException('this coordinator is not found');

    return coordinatorToMember;
  }

  /**
   * get coordinatorToMember by cadence id
   */
  async getByCadenceId(data: ICoordinatorToMember_GetByCadenceId): Promise<ICoordinatorToMember_GetByCadenceId_Res[]> {
    // check if cadence is exist
    const cadence = await this.appDbService.findCadenceById({ id: data.cadence_id });
    if (!cadence) throw new NotFoundException('this cadence is not found');

    const coordinatorToMemberList = await this.coordinatorToMemberDb.findByCadenceId({ cadence_id: data.cadence_id });
    return coordinatorToMemberList;
  }
}
