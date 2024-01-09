import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// App
import { AppDbService } from '../app/app.db.service';

// Membership
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';
import { MembershipDbService } from './membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MembershipController],
  providers: [MembershipService, MembershipDbService, AppDbService],
})
export class MembershipModule {}
