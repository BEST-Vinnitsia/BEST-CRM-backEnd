import { Injectable } from '@nestjs/common';
import { DatabaseService } from './modules/database/database.service';
import { handlerError } from './utils/handlerError';

@Injectable()
export class AppDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }) {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }

  public async findMembershipById({ id }: { id: string }) {
    const membership = await handlerError(this.database.membership.findUnique({ where: { id } }));
    return membership;
  }

  public async findMeetingById({ id }: { id: string }) {
    const meeting = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return meeting;
  }

  public async findCadenceById({ id }: { id: string }) {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id } }));
    return cadence;
  }

  public async findCoordinatorById({ id }: { id: string }) {
    const coordinator = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return coordinator;
  }

  public async findCoordinatorToMember({ cadence_id, coordinator_id }: { cadence_id: string; coordinator_id: string }) {
    const coordinatorToMember = await handlerError(this.database.member_to_coordinator.findFirst({ where: { cadence_id, coordinator_id } }));
    return coordinatorToMember;
  }
}
