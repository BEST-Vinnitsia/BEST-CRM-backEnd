import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEvent } from '../../../../interfaces/event/event.interface';

export class Event implements IEvent {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
