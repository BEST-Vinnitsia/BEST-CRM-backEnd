import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Member
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { PhoneService } from './phone.service';
import { SocialNetworkService } from './social-network.service';

@Module({
    imports: [DatabaseModule],
    controllers: [MemberController],
    providers: [MemberService, PhoneService, SocialNetworkService],
})
export class MemberModule {}
