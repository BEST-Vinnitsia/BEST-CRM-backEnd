import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from '../member/member.module';
import { CadenceModule } from '../cadence/cadence.module';
import { BoardModule } from '../board/board.module';
import { BoardToMemberModule } from '../board-to-member/board-to-member.module';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from 'src/common/guards';
import { EmailModule } from '../email/email.module';
import { EventModule } from '../event/event.module';
import { NewEventModule } from '../new-event/new-event.module';
import { ResponsibleModule } from '../responsible/responsible.module';
import { MemberToEventModule } from '../member-to-event/member-to-event.module';
import { PhoneModule } from '../phone/phone.module';
import { SocialNetworkModule } from '../social-network/social-network.module';

@Module({
    imports: [
        //

        AuthModule,

        MemberModule,
        EmailModule,
        PhoneModule,
        SocialNetworkModule,

        CadenceModule,

        BoardModule,
        BoardToMemberModule,

        EventModule,
        NewEventModule,
        ResponsibleModule,
        MemberToEventModule,
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
