import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// App
import { AppDbService } from '../app/app.db.service';

// Member
import { MemberService } from './member.service';
import { MemberDbService } from './member.db.service';
import { MemberController } from './member.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MemberController],
  providers: [MemberService, MemberDbService, AppDbService],
})
export class MemberModule {}
