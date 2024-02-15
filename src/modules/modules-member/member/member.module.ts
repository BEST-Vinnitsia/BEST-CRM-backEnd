import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';

@Module({
    imports: [PrismaModule],
    controllers: [MemberController],
    providers: [MemberService],
    exports: [MemberService],
})
export class MemberModule {}
