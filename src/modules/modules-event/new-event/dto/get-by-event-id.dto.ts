import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { INewEventGetByEventId } from '../../../interfaces/event/new-event.interface';

export class NewEventGetByEventIdDto implements INewEventGetByEventId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    eventId: string;
}
