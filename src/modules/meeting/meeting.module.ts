import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Meeting
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MeetingController],
  providers: [MeetingService],
})
export class MeetingModule {}
