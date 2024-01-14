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
import { BoardToMemberModule } from '../board-to-member/board-to-member.module';
import { CoordinatorToMemberModule } from '../coordinator-to-member/coordinator-to-member.module';
import { MeetingModule } from '../meeting/meeting.module';
import { TranslationModule } from '../translation/translation.module';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from 'src/common/guards';

@Module({
  imports: [
    //

    DatabaseModule,

    AuthModule,

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
  providers: [
    AppService,

    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
