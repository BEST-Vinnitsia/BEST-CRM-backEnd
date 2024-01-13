import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// BoardToMember
import { BoardToMemberController } from './board-to-member.controller';
import { BoardToMemberService } from './board-to-member.service';
import { BoardToMemberDbService } from './board-to-member.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardToMemberController],
  providers: [BoardToMemberService, BoardToMemberDbService],
})
export class BoardToMemberModule {}
