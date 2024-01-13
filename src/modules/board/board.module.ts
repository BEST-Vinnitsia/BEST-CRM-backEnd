import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Board
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { BoardDbService } from './board.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, BoardDbService],
})
export class BoardModule {}
