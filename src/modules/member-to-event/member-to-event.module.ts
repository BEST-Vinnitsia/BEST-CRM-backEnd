import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MemberToEventController } from './member-to-event.controller';
import { MemberToEventService } from './member-to-event.service';
import { ResponsibleModule } from '../responsible/responsible.module';
import { MemberModule } from '../member/member.module';
import { NewEventModule } from '../new-event/new-event.module';

@Module({
    imports: [PrismaModule, NewEventModule, MemberModule, ResponsibleModule],
    controllers: [MemberToEventController],
    providers: [MemberToEventService],
    exports: [MemberToEventService],
})
export class MemberToEventModule {}
