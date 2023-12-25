import { Module } from '@nestjs/common';
import { LgaController } from './lga.controller';
import { DatabaseModule } from '../database/database.module';
import { LgaService } from './lga.service';
import { LgaDbService } from './lga.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LgaController],
  providers: [LgaService, LgaDbService],
})
export class LgaModule {}
