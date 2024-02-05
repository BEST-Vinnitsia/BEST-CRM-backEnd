import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { PhoneService } from './phone.service';
import { SocialNetworkService } from './social-network.service';

@Module({
    imports: [PrismaModule],
    controllers: [MemberController],
    providers: [MemberService, PhoneService, SocialNetworkService],
})
export class MemberModule {}
