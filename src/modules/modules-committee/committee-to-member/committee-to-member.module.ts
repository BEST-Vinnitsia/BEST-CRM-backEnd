import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CommitteeToMemberController } from './committee-to-member.controller';
import { CommitteeToMemberService } from './committee-to-member.service';
import { MemberModule } from '../../modules-member/member/member.module';
import { CadenceModule } from '../../cadence/cadence.module';
import { CommitteeModule } from '../committee/committee.module';

@Module({
    imports: [PrismaModule, MemberModule, CommitteeModule, CadenceModule],
    controllers: [CommitteeToMemberController],
    providers: [CommitteeToMemberService],
})
export class CommitteeToMemberModule {}
