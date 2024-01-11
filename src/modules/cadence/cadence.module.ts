import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// App
import { AppDbService } from '../app/app.db.service';

// Cadence
import { CadenceController } from './cadence.controller';
import { CadenceService } from './cadence.service';
import { CadenceDbService } from './cadence.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CadenceController],
  providers: [CadenceService, CadenceDbService, AppDbService],
})
export class CadenceModule {}
