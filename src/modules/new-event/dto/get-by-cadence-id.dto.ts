import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { INewEventGetByCadenceId } from '../../../interfaces/event/new-event.interface';

export class NewEventGetByCadenceIdDto implements INewEventGetByCadenceId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;
}
