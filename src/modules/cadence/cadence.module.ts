import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Cadence
import { CadenceController } from './cadence.controller';
import { CadenceService } from './cadence.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CadenceController],
  providers: [CadenceService],
})
export class CadenceModule {}
