import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// App
import { AppDbService } from '../app/app.db.service';

// Board
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { BoardDbService } from './board.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, BoardDbService, AppDbService],
})
export class BoardModule {}
