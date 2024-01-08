import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';

/* ----------------  APP  ---------------- */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDbService } from './app.db.service';

/* ----------------  MEMBER  ---------------- */
import { MemberModule } from './modules/member/member.module';
import { MembershipModule } from './modules/membership/membership.module';

@Module({
  imports: [
    DatabaseModule,
    // member
    MemberModule,
    MembershipModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppDbService],
})
export class AppModule {}
