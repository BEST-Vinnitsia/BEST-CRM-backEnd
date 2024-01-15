import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Member
import { MemberService } from './member.service';
import { MemberController } from './member.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
