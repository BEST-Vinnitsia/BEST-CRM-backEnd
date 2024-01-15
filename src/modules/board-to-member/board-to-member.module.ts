import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// BoardToMember
import { BoardToMemberController } from './board-to-member.controller';
import { BoardToMemberService } from './board-to-member.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardToMemberController],
  providers: [BoardToMemberService],
})
export class BoardToMemberModule {}
