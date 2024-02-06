import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
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

@Module({
    imports: [
        //
        PrismaModule,

        AuthModule,

        MemberModule,
        EmailModule,

        CadenceModule,

        BoardModule,
        BoardToMemberModule,

        EventModule,
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
