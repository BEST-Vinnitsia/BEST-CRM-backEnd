import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BoardToMemberController } from './board-to-member.controller';
import { BoardToMemberService } from './board-to-member.service';

@Module({
    imports: [PrismaModule],
    controllers: [BoardToMemberController],
    providers: [BoardToMemberService],
})
export class BoardToMemberModule {}
