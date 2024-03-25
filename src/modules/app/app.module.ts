import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadenceModule } from '../cadence/cadence.module';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from 'src/common/guards';
import { MemberModule } from '../modules-member/member/member.module';
import { BoardModule } from '../modules-board/board/board.module';
import { BoardToMemberModule } from '../modules-board/board-to-member/board-to-member.module';
import { CoordinatorModule } from '../modules-coordinator/coordinator/coordinator.module';
import { CoordinatorToMemberModule } from '../modules-coordinator/coordinator-to-member/coordinator-to-member.module';
import { CommitteeModule } from '../modules-committee/committee/committee.module';
import { CommitteeToMemberModule } from '../modules-committee/committee-to-member/committee-to-member.module';
import { EventModule } from '../event/event.module';
import { MeetingModule } from '../modules-meeting/meeting/meeting.module';
import { IncreaseModule } from '../modules-meeting/increase/increase.module';
import { GoogleDriveModule } from '../google-drive/google-drive.module';

@Module({
    imports: [
        // global
        AuthModule,
        CadenceModule,

        // member
        MemberModule,
        // EmailModule,
        // PhoneModule,
        // SocialNetworkModule,

        // board
        BoardModule,
        BoardToMemberModule,

        // coordinator
        CoordinatorModule,
        CoordinatorToMemberModule,

        // committee
        CommitteeModule,
        CommitteeToMemberModule,

        // event
        EventModule,

        // meeting
        MeetingModule,
        IncreaseModule,

        // store
        GoogleDriveModule,
    ],
    controllers: [AppController],
    providers: [AppService, { provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}
