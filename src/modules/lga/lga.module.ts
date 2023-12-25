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

// Membership
import { MembershipController } from './membership/membership.controller';
import { MembershipService } from './membership/membership.service';
import { MembershipDbService } from './membership/membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    LgaController,

    // Board
    BoardController,
    BoardToMemberController,
    BoardCommitteeToMemberController,

    // Membership
    MembershipController,
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

    // Membership
    MembershipService,
    MembershipDbService,
  ],
})
export class LgaModule {}
