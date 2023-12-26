import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';
import { BoardDbService } from './board/board.db.service';
import { BoardToMemberController } from './board_to_member/boardToMember.controller';
import { BoardToMemberService } from './board_to_member/boardToMember.service';
import { BoardToMemberDbService } from './board_to_member/boardToMember.db.service';
import { BoardCommitteeToMemberController } from './boardCommittee_to_member/boardCommitteeToMember.controller';
import { BoardCommitteeToMemberService } from './boardCommittee_to_member/boardCommitteeToMember.service';
import { BoardCommitteeToMemberDbService } from './boardCommittee_to_member/boardCommitteeToMember.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController, BoardToMemberController, BoardCommitteeToMemberController],
  providers: [
    BoardService,
    BoardDbService,
    BoardToMemberService,
    BoardToMemberDbService,
    BoardCommitteeToMemberService,
    BoardCommitteeToMemberDbService,
  ],
})
export class BoardModule {}
