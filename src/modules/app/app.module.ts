import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// global
import { CadenceModule } from '../cadence/cadence.module';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from 'src/common/guards';
// member
import { MemberModule } from '../modules-member/member/member.module';
// board
import { BoardModule } from '../modules-board/board/board.module';
import { BoardToMemberModule } from '../modules-board/board-to-member/board-to-member.module';
// coordinator
import { CoordinatorModule } from '../modules-coordinator/coordinator/coordinator.module';
import { CoordinatorToMemberModule } from '../modules-coordinator/coordinator-to-member/coordinator-to-member.module';
// committee
import { CommitteeModule } from '../modules-committee/committee/committee.module';
import { CommitteeToMemberModule } from '../modules-committee/committee-to-member/committee-to-member.module';
// event
import { EventModule } from '../modules-event/event/event.module';
import { ResponsibleModule } from '../modules-event/responsible/responsible.module';
import { NewEventModule } from '../modules-event/new-event/new-event.module';
import { NewEventToMemberModule } from '../modules-event/new-event-to-member/new-event-to-member.module';
// meeting
import { MeetingModule } from '../modules-meeting/meeting/meeting.module';
import { IncreaseModule } from '../modules-meeting/increase/increase.module';

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
        ResponsibleModule,
        NewEventModule,
        NewEventToMemberModule,

        // meeting
        MeetingModule,
        IncreaseModule,
    ],
    controllers: [AppController],
    providers: [AppService, { provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}
