import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CoordinatorCommitteeToMemberDbService } from './coordinatorCommitteeToMember.db.service';
import {
  ICoordinatorCommitteeToMember_Create,
  ICoordinatorCommitteeToMember_Create_Res,
  ICoordinatorCommitteeToMember_GetById,
  ICoordinatorCommitteeToMember_GetById_Res,
  ICoordinatorCommitteeToMember_GetList_Res,
} from 'src/types/coordinatorCommitteeToMember.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class CoordinatorCommitteeToMemberService {
  constructor(
    private readonly coordinatorCommitteeToMemberDb: CoordinatorCommitteeToMemberDbService,
    private readonly appDbService: AppDbService,
  ) {}

  async create(data: ICoordinatorCommitteeToMember_Create): Promise<ICoordinatorCommitteeToMember_Create_Res> {
    // check if member is exist
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('this member is not exist');

    // check if cadence is exist
    const cadence = await this.appDbService.findCadenceById({ id: data.cadence_id });
    if (!cadence) throw new NotFoundException('this cadence is not exist');

    // check if coordinator is exist
    const coordinator = await this.appDbService.findCoordinatorById({ id: data.coordinator_id });
    if (!coordinator) throw new NotFoundException('this coordinator is not exist');

    // check if coordinator is active
    if (!coordinator.is_active) throw new BadRequestException('this coordinator is not active now');

    // check if committee is active
    if (!coordinator.committee_is_active) throw new BadRequestException('this committee is not active now');

    // get coordinator to member
    const coordinatorToMember = await this.appDbService.findCoordinatorToMember({ cadence_id: data.cadence_id, coordinator_id: data.coordinator_id });
    if (!coordinatorToMember) throw new NotFoundException('this committee not have coordinator');

    // check if this member is a coordinator
    if (coordinatorToMember.member_id === data.member_id) throw new BadRequestException('this member is a coordinator this committee');

    const newCoordinatorCommitteeToMember = await this.coordinatorCommitteeToMemberDb.create(data);
    return newCoordinatorCommitteeToMember;
  }

  async getList(): Promise<ICoordinatorCommitteeToMember_GetList_Res[]> {
    const coordinatorCommitteeToMemberList = await this.coordinatorCommitteeToMemberDb.findAll();
    return coordinatorCommitteeToMemberList;
  }

  async getById(data: ICoordinatorCommitteeToMember_GetById): Promise<ICoordinatorCommitteeToMember_GetById_Res> {
    const coordinatorCommitteeToMember = await this.coordinatorCommitteeToMemberDb.findById(data);
    return coordinatorCommitteeToMember;
  }
}
