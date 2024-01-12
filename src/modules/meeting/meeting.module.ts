import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// App
import { AppDbService } from '../app/app.db.service';

// Meeting
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { MeetingDbService } from './meeting.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MeetingController],
  providers: [MeetingService, MeetingDbService, AppDbService],
})
export class MeetingModule {}
