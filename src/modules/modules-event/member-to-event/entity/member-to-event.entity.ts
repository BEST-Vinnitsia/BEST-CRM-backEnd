import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMemberToEvent } from '../../../../interfaces/event/member-to-event.interface';

export class MemberToEvent implements IMemberToEvent {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    newEventId: string;

    @ApiProperty({ example: randomUUID() })
    responsibleId: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty()
    excluded: boolean;

    @ApiProperty()
    excludedDate: Date | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
