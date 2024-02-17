import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { MemberToNewEventController } from './member-to-new-event.controller';
import { MemberToNewEventService } from './member-to-new-event.service';
import { ResponsibleModule } from '../responsible/responsible.module';
import { MemberModule } from '../../modules-member/member/member.module';
import { NewEventModule } from '../new-event/new-event.module';

@Module({
    imports: [PrismaModule, NewEventModule, MemberModule, ResponsibleModule],
    controllers: [MemberToNewEventController],
    providers: [MemberToNewEventService],
    exports: [MemberToNewEventService],
})
export class MemberToNewEventModule {}
