import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CoordinatorToMemberController } from './coordinator-to-member.controller';
import { CoordinatorToMemberService } from './coordinator-to-member.service';
import { MemberModule } from '../../modules-member/member/member.module';
import { CadenceModule } from '../../cadence/cadence.module';
import { CoordinatorModule } from '../coordinator/coordinator.module';

@Module({
    imports: [PrismaModule, MemberModule, CoordinatorModule, CadenceModule],
    controllers: [CoordinatorToMemberController],
    providers: [CoordinatorToMemberService],
    exports: [CoordinatorToMemberService],
})
export class CoordinatorToMemberModule {}
