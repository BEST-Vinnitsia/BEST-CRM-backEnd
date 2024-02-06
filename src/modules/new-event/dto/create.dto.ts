import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { INewEventCreate } from '../../../interfaces/event/new-event.interface';
import { randomUUID } from 'crypto';

export class NewEventCreateDto implements INewEventCreate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    eventId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;
}
