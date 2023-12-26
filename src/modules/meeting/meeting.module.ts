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

// Cadence
import { CadenceController } from './cadence/cadence.controller';
import { CadenceDbService } from './cadence/cadence.db.service';
import { CadenceService } from './cadence/cadence.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MeetingController, TranslationController, CadenceController],
  providers: [
    MeetingService,
    MeetingDbService,

    TranslationService,
    TranslationDbService,

    CadenceService,
    CadenceDbService,
  ],
})
export class MeetingModule {}
