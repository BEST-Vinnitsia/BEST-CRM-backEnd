import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// CoordinatorToMember
import { CoordinatorToMemberController } from './coordinator-to-member.controller';
import { CoordinatorToMemberService } from './coordinator-to-member.service';
import { CoordinatorToMemberDbService } from './coordinator-to-member.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoordinatorToMemberController],
  providers: [CoordinatorToMemberService, CoordinatorToMemberDbService],
})
export class CoordinatorToMemberModule {}
