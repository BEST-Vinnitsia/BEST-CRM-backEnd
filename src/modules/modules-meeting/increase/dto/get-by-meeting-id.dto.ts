import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IIncreaseGetByMeetingId } from '../../../../interfaces/meeting/increase.interface';

export class IncreaseGetByMeetingIdDto implements IIncreaseGetByMeetingId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    meetingId: string;
}
