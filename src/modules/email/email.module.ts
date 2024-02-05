import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MemberModule } from '../member/member.module';

@Module({
    imports: [PrismaModule, MemberModule],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}
