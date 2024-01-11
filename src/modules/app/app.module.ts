import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

/* ----------------  APP  ---------------- */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDbService } from './app.db.service';

/* ----------------  MEMBER  ---------------- */
import { MemberModule } from '../member/member.module';
import { MembershipModule } from '../membership/membership.module';
import { CadenceModule } from '../cadence/cadence.module';
import { BoardModule } from '../board/board.module';
import { CoordinatorModule } from '../coordinator/coordinator.module';

@Module({
  imports: [
    DatabaseModule,
    //
    MemberModule,
    MembershipModule,
    CadenceModule,
    BoardModule,
    CoordinatorModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppDbService],
})
export class AppModule {}
