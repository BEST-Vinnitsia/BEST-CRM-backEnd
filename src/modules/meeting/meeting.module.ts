import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Meeting
import { MeetingController } from './meeting/meeting.controller';
import { MeetingService } from './meeting/meeting.service';
import { MeetingDbService } from './meeting/meeting.db.service';

// Translation
import { TranslationController } from './translation/translation.controller';
import { TranslationService } from './translation/translation.service';
import { TranslationDbService } from './translation/translation.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MeetingController, TranslationController],
  providers: [MeetingService, MeetingDbService, TranslationService, TranslationDbService],
})
export class LgaModule {}
