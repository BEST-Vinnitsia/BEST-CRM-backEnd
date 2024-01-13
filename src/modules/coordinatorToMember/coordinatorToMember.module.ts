import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// CoordinatorToMember
import { CoordinatorToMemberController } from './coordinatorToMember.controller';
import { CoordinatorToMemberService } from './coordinatorToMember.service';
import { CoordinatorToMemberDbService } from './coordinatorToMember.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoordinatorToMemberController],
  providers: [CoordinatorToMemberService, CoordinatorToMemberDbService],
})
export class CoordinatorToMemberModule {}
