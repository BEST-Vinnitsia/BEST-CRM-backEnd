import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Membership
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';
import { MembershipDbService } from './membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MembershipController],
  providers: [MembershipService, MembershipDbService],
})
export class MembershipModule {}
