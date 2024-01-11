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

@Module({
  imports: [
    DatabaseModule,
    // member
    MemberModule,
    MembershipModule,
    CadenceModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppDbService],
})
export class AppModule {}
