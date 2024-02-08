import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICommitteeToMember } from '../../../../interfaces/committee/committee-to-member.interface';

export class CommitteeToMember implements ICommitteeToMember {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    cadenceId: string;

    @ApiProperty({ example: randomUUID() })
    committeeId: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty()
    excluded: boolean;

    @ApiProperty()
    excludedDate?: Date;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
