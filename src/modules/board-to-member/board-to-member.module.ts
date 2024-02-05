import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BoardToMemberController } from './board-to-member.controller';
import { BoardToMemberService } from './board-to-member.service';
import { MemberModule } from '../member/member.module';
import { BoardModule } from '../board/board.module';
import { CadenceModule } from '../cadence/cadence.module';

@Module({
    imports: [PrismaModule, MemberModule, BoardModule, CadenceModule],
    controllers: [BoardToMemberController],
    providers: [BoardToMemberService],
})
export class BoardToMemberModule {}
