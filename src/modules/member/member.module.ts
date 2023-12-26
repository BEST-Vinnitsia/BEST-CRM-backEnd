import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MemberService } from './member/member.service';
import { MemberDbService } from './member/member.db.service';
import { MemberEmailService } from './email/memberEmail.service';
import { MemberPhoneService } from './phone/member.service';
import { MemberBestEmailService } from './bestEmail/memberBestEmail.service';
import { MemberSocialNetworksService } from './socialNetworks/member.service';
import { MemberSocialNetworksDbService } from './socialNetworks/member.db.service';
import { MemberBestEmailDbService } from './bestEmail/memberBestEmail.db.service';
import { MemberPhoneDbService } from './phone/member.db.service';
import { MemberEmailDbService } from './email/memberEmail.db.service';
import { MemberController } from './member/member.controller';
import { MemberEmailController } from './email/memberEmail.controller';
import { MemberPhoneController } from './phone/member.controller';
import { MemberBestEmailController } from './bestEmail/memberBestEmail.controller';
import { MemberSocialNetworksController } from './socialNetworks/member.controller';

// Membership
import { MembershipController } from './membership/membership.controller';
import { MembershipService } from './membership/membership.service';
import { MembershipDbService } from './membership/membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    MemberController,
    MemberEmailController,
    MemberPhoneController,
    MemberBestEmailController,
    MemberSocialNetworksController,

    // Membership
    MembershipController,
  ],
  providers: [
    MemberService,
    MemberDbService,

    MemberEmailService,
    MemberEmailDbService,

    MemberPhoneService,
    MemberPhoneDbService,

    MemberBestEmailService,
    MemberBestEmailDbService,

    MemberSocialNetworksService,
    MemberSocialNetworksDbService,

    // Membership
    MembershipService,
    MembershipDbService,
  ],
})
export class MemberModule {}
