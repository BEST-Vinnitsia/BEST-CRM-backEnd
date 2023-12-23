import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { DatabaseModule } from '../database/database.module';
import { MemberDbService } from './member.db.service';

@Module({
  imports: [DatabaseModule],
  providers: [MemberService, MemberDbService],
  controllers: [MemberController],
})
export class MemberModule {}
