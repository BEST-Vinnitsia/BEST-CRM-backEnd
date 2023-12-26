import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';

// App
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Member
import { MemberModule } from './modules/member/member.module';

// Board
import { BoardModule } from './modules/board/board.module';

// Coordinator
import { CoordinatorModule } from './modules/coordinator/coordinator.module';

@Module({
  imports: [DatabaseModule, MemberModule, BoardModule, CoordinatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
