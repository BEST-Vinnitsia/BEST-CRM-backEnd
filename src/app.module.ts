import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { MemberModule } from './modules/member/member.module';
import { MembershipModule } from './modules/membership/membership.module';

@Module({
  imports: [DatabaseModule, MemberModule, MembershipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
