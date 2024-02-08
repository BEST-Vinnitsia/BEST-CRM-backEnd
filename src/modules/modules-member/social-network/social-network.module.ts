import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { SocialNetworkController } from './social-network.controller';
import { SocialNetworkService } from './social-network.service';
import { MemberModule } from '../member/member.module';

@Module({
    imports: [PrismaModule, MemberModule],
    controllers: [SocialNetworkController],
    providers: [SocialNetworkService],
})
export class SocialNetworkModule {}
