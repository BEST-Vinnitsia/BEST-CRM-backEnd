import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { ResponsibleController } from './responsible.controller';
import { ResponsibleService } from './responsible.service';
import { EventModule } from '../event/event.module';

@Module({
    imports: [PrismaModule, EventModule],
    controllers: [ResponsibleController],
    providers: [ResponsibleService],
    exports: [ResponsibleService],
})
export class ResponsibleModule {}
