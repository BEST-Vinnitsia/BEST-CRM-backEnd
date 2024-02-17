import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { NewEventToMemberController } from './new-event-to-member.controller';
import { NewEventToMemberService } from './new-event-to-member.service';
import { ResponsibleModule } from '../responsible/responsible.module';
import { MemberModule } from '../../modules-member/member/member.module';
import { NewEventModule } from '../new-event/new-event.module';

@Module({
    imports: [PrismaModule, NewEventModule, MemberModule, ResponsibleModule],
    controllers: [NewEventToMemberController],
    providers: [NewEventToMemberService],
    exports: [NewEventToMemberService],
})
export class NewEventToMemberModule {}
