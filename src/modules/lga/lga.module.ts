import { Module } from '@nestjs/common';
import { LgaController } from './lga/lga.controller';
import { DatabaseModule } from '../database/database.module';
import { LgaService } from './lga/lga.service';
import { LgaDbService } from './lga/lga.db.service';
import { LgaBoardController } from './board/board.controller';
import { LgaBoardService } from './board/board.service';
import { LgaBoardDbService } from './board/board.db.service';
import { LgaBoardToMemberController } from './board_to_member/boardToMember.controller';
import { LgaBoardToMemberService } from './board_to_member/boardToMember.service';
import { LgaBoardToMemberDbService } from './board_to_member/boardToMember.db.service';
import { LgaBoardCommitteeToMemberController } from './boardCommittee_to_member/boardCommitteeToMember.controller';
import { LgaBoardCommitteeToMemberService } from './boardCommittee_to_member/boardCommitteeToMember.service';
import { LgaBoardCommitteeToMemberDbService } from './boardCommittee_to_member/boardCommitteeToMember.db.service';
import { MembershipController } from './membership/membership.controller';
import { MembershipService } from './membership/membership.service';
import { MembershipDbService } from './membership/membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    LgaController,
    LgaBoardController,
    LgaBoardToMemberController,
    LgaBoardCommitteeToMemberController,
    MembershipController,
  ],
  providers: [
    LgaService,
    LgaDbService,
    LgaBoardService,
    LgaBoardDbService,
    LgaBoardToMemberService,
    LgaBoardToMemberDbService,
    LgaBoardCommitteeToMemberService,
    LgaBoardCommitteeToMemberDbService,
    MembershipService,
    MembershipDbService,
  ],
})
export class LgaModule {}
