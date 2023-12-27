import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Member
import { MemberService } from './member/member.service';
import { MemberDbService } from './member/member.db.service';
import { MemberController } from './member/member.controller';

// Email
import { EmailService } from './email/email.service';
import { EmailDbService } from './email/email.db.service';
import { EmailController } from './email/email.controller';

// Phone
import { PhoneService } from './phone/phone.service';
import { PhoneDbService } from './phone/phone.db.service';
import { PhoneController } from './phone/phone.controller';

// BestEmail
import { BestEmailService } from './bestEmail/bestEmail.service';
import { BestEmailDbService } from './bestEmail/bestEmail.db.service';
import { BestEmailController } from './bestEmail/bestEmail.controller';

// SocialNetwork
import { SocialNetworkService } from './socialNetwork/socialNetwork.service';
import { SocialNetworkDbService } from './socialNetwork/socialNetwork.db.service';
import { SocialNetworkController } from './socialNetwork/socialNetwork.controller';

// Membership
import { MembershipController } from './membership/membership.controller';
import { MembershipService } from './membership/membership.service';
import { MembershipDbService } from './membership/membership.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MemberController, EmailController, PhoneController, BestEmailController, SocialNetworkController, MembershipController],
  providers: [
    MemberService,
    MemberDbService,

    EmailService,
    EmailDbService,

    PhoneService,
    PhoneDbService,

    BestEmailService,
    BestEmailDbService,

    SocialNetworkService,
    SocialNetworkDbService,

    MembershipService,
    MembershipDbService,
  ],
})
export class MemberModule {}
