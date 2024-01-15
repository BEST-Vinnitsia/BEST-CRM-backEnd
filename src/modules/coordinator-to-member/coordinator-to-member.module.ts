import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// CoordinatorToMember
import { CoordinatorToMemberController } from './coordinator-to-member.controller';
import { CoordinatorToMemberService } from './coordinator-to-member.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoordinatorToMemberController],
  providers: [CoordinatorToMemberService],
})
export class CoordinatorToMemberModule {}
