import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { INewEvent } from '../../../../interfaces/event/new-event.interface';

export class NewEvent implements INewEvent {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    eventId: string;

    @ApiProperty({ example: randomUUID() })
    cadenceId: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
