import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Translation
import { TranslationController } from './translation.controller';
import { TranslationService } from './translation.service';
import { TranslationDbService } from './translation.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TranslationController],
  providers: [TranslationService, TranslationDbService],
})
export class TranslationModule {}
