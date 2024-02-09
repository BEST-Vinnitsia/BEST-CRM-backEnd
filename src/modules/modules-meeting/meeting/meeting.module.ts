import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { CadenceModule } from '../../cadence/cadence.module';

@Module({
    imports: [PrismaModule, CadenceModule],
    controllers: [MeetingController],
    providers: [MeetingService],
})
export class MeetingModule {}
