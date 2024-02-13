import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { BoardModule } from '../../modules-board/board/board.module';
import { CadenceModule } from '../../cadence/cadence.module';
import { CoordinatorModule } from '../../modules-coordinator/coordinator/coordinator.module';
import { CommitteeModule } from '../../modules-committee/committee/committee.module';
import { NewEventModule } from '../../modules-event/new-event/new-event.module';
import { ResponsibleModule } from '../../modules-event/responsible/responsible.module';

@Module({
    imports: [PrismaModule, BoardModule, CadenceModule, CoordinatorModule, CommitteeModule, NewEventModule, ResponsibleModule],
    controllers: [MemberController],
    providers: [MemberService],
    exports: [MemberService],
})
export class MemberModule {}
