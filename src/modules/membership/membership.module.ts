import { Module } from '@nestjs/common';
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';
import { DatabaseModule } from '../database/database.module';
import { MembershipDbService } from './membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MembershipController],
  providers: [MembershipService, MembershipDbService],
})
export class MembershipModule {}
