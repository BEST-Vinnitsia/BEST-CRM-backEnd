import { Module } from '@nestjs/common';
import { LgaController } from './lga/lga.controller';
import { DatabaseModule } from '../database/database.module';
import { LgaService } from './lga/lga.service';
import { LgaDbService } from './lga/lga.db.service';

// Board
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';
import { BoardDbService } from './board/board.db.service';
import { BoardToMemberController } from './board_to_member/boardToMember.controller';
import { BoardToMemberService } from './board_to_member/boardToMember.service';
import { BoardToMemberDbService } from './board_to_member/boardToMember.db.service';
import { BoardCommitteeToMemberController } from './boardCommittee_to_member/boardCommitteeToMember.controller';
import { BoardCommitteeToMemberService } from './boardCommittee_to_member/boardCommitteeToMember.service';
import { BoardCommitteeToMemberDbService } from './boardCommittee_to_member/boardCommitteeToMember.db.service';

// Coordinator
import { CoordinatorController } from './coordinator/coordinator.controller';
import { CoordinatorService } from './coordinator/coordinator.service';
import { CoordinatorDbService } from './coordinator/coordinator.db.service';
import { CoordinatorToMemberController } from './coordinator_to_member/coordinatorToMember.controller';
import { CoordinatorToMemberService } from './coordinator_to_member/coordinatorToMember.service';
import { CoordinatorToMemberDbService } from './coordinator_to_member/coordinatorToMember.db.service';
import { CoordinatorCommitteeToMemberController } from './coordinatorCommittee_to_member/coordinatorCommitteeToMember.controller';
import { CoordinatorCommitteeToMemberService } from './coordinatorCommittee_to_member/coordinatorCommitteeToMember.service';
import { CoordinatorCommitteeToMemberDbService } from './coordinatorCommittee_to_member/coordinatorCommitteeToMember.db.service';

// Membership
import { MembershipController } from './membership/membership.controller';
import { MembershipService } from './membership/membership.service';
import { MembershipDbService } from './membership/membership.db.service';

// Translation
import { TranslationController } from './translation/translation.controller';
import { TranslationService } from './translation/translation.service';
import { TranslationDbService } from './translation/translation.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    LgaController,

    // Board
    BoardController,
    BoardToMemberController,
    BoardCommitteeToMemberController,

    // Coordinator
    CoordinatorController,
    CoordinatorToMemberController,
    CoordinatorCommitteeToMemberController,

    // Membership
    MembershipController,

    // Translation
    TranslationController,
  ],
  providers: [
    LgaService,
    LgaDbService,

    // Board
    BoardService,
    BoardDbService,
    BoardToMemberService,
    BoardToMemberDbService,
    BoardCommitteeToMemberService,
    BoardCommitteeToMemberDbService,

    // Coordinator
    CoordinatorService,
    CoordinatorDbService,
    CoordinatorToMemberService,
    CoordinatorToMemberDbService,
    CoordinatorCommitteeToMemberService,
    CoordinatorCommitteeToMemberDbService,

    // Membership
    MembershipService,
    MembershipDbService,

    // Translation
    TranslationService,
    TranslationDbService,
  ],
})
export class LgaModule {}
