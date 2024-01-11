import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// App
import { AppDbService } from '../app/app.db.service';

// BoardToMember
import { BoardToMemberController } from './boardToMember.controller';
import { BoardToMemberService } from './boardToMember.service';
import { BoardToMemberDbService } from './boardToMember.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardToMemberController],
  providers: [BoardToMemberService, BoardToMemberDbService, AppDbService],
})
export class BoardToMemberModule {}
