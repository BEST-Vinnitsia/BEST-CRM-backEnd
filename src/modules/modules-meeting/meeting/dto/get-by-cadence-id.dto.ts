import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMeetingGetByCadenceId } from '../../../../interfaces/meeting/meeting.interface';

export class MeetingGetByCadenceIdDto implements IMeetingGetByCadenceId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;
}
