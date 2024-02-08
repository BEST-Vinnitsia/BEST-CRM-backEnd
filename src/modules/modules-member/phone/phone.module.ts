import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { PhoneController } from './phone.controller';
import { PhoneService } from './phone.service';
import { MemberModule } from '../member/member.module';

@Module({
    imports: [PrismaModule, MemberModule],
    controllers: [PhoneController],
    providers: [PhoneService],
})
export class PhoneModule {}
