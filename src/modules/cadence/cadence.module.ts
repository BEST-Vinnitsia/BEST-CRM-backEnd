import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CadenceController } from './cadence.controller';
import { CadenceService } from './cadence.service';

@Module({
    imports: [PrismaModule],
    controllers: [CadenceController],
    providers: [CadenceService],
    exports: [CadenceService]
})
export class CadenceModule {}
