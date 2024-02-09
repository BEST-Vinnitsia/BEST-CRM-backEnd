import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IIncrease } from '../../../../interfaces/meeting/increase.interface';

export class IncreaseEntity implements IIncrease {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty({ example: randomUUID() })
    meetingId: string;

    @ApiProperty()
    membership: string;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
