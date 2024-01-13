import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

/* ----------------  APP  ---------------- */
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* ----------------  MEMBER  ---------------- */
import { MemberModule } from '../member/member.module';
import { MembershipModule } from '../membership/membership.module';
import { CadenceModule } from '../cadence/cadence.module';
import { BoardModule } from '../board/board.module';
import { CoordinatorModule } from '../coordinator/coordinator.module';
import { BoardToMemberModule } from '../boardToMember/boardToMember.module';
import { CoordinatorToMemberModule } from '../coordinatorToMember/coordinatorToMember.module';
import { MeetingModule } from '../meeting/meeting.module';
import { TranslationModule } from '../translation/translation.module';

@Module({
  imports: [
    DatabaseModule,
    //
    MemberModule,
    MembershipModule,

    CadenceModule,

    BoardModule,
    BoardToMemberModule,

    CoordinatorModule,
    CoordinatorToMemberModule,

    MeetingModule,

    TranslationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
