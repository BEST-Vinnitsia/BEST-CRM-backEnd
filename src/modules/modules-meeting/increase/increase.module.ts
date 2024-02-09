import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { IncreaseController } from './increase.controller';
import { IncreaseService } from './increase.service';
import { MeetingModule } from '../meeting/meeting.module';
import { MemberModule } from '../../modules-member/member/member.module';

@Module({
    imports: [PrismaModule, MemberModule, MeetingModule],
    controllers: [IncreaseController],
    providers: [IncreaseService],
})
export class IncreaseModule {}
