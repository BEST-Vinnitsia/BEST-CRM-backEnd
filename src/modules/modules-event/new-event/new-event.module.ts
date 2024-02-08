import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { NewEventController } from './new-event.controller';
import { NewEventService } from './new-event.service';
import { CadenceModule } from '../cadence/cadence.module';
import { EventModule } from '../event/event.module';

@Module({
    imports: [PrismaModule, CadenceModule, EventModule],
    controllers: [NewEventController],
    providers: [NewEventService],
    exports: [NewEventService],
})
export class NewEventModule {}
