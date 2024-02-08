import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMemberToEventGetByNewEventId } from '../../../../interfaces/event/member-to-event.interface';

export class MemberToEventGetByNewEventIdDto implements IMemberToEventGetByNewEventId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    newEventId: string;
}
