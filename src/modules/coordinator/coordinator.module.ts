import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Coordinator
import { CoordinatorController } from './coordinator.controller';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorDbService } from './coordinator.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoordinatorController],
  providers: [CoordinatorService, CoordinatorDbService],
})
export class CoordinatorModule {}
