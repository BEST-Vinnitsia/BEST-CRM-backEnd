import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMeeting } from '../../../../interfaces/meeting/meeting.interface';

export class MeetingEntity implements IMeeting {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    cadenceId: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    date: Date;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
