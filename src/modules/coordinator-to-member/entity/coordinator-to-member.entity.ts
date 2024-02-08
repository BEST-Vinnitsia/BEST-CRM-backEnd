import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMember } from '../../../interfaces/coordinator/coordinator-to-member.interface';

export class CoordinatorToMember implements ICoordinatorToMember {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    cadenceId: string;

    @ApiProperty({ example: randomUUID() })
    coordinatorId: string;

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
