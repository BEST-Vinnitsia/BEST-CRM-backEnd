import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { CoordinatorController } from './coordinator/coordinator.controller';
import { CoordinatorService } from './coordinator/coordinator.service';
import { CoordinatorDbService } from './coordinator/coordinator.db.service';
import { CoordinatorToMemberController } from './coordinator_to_member/coordinatorToMember.controller';
import { CoordinatorToMemberService } from './coordinator_to_member/coordinatorToMember.service';
import { CoordinatorToMemberDbService } from './coordinator_to_member/coordinatorToMember.db.service';
import { CoordinatorCommitteeToMemberController } from './coordinatorCommittee_to_member/coordinatorCommitteeToMember.controller';
import { CoordinatorCommitteeToMemberService } from './coordinatorCommittee_to_member/coordinatorCommitteeToMember.service';
import { CoordinatorCommitteeToMemberDbService } from './coordinatorCommittee_to_member/coordinatorCommitteeToMember.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoordinatorController, CoordinatorToMemberController, CoordinatorCommitteeToMemberController],
  providers: [
    CoordinatorService,
    CoordinatorDbService,
    CoordinatorToMemberService,
    CoordinatorToMemberDbService,
    CoordinatorCommitteeToMemberService,
    CoordinatorCommitteeToMemberDbService,
  ],
})
export class CoordinatorModule {}
