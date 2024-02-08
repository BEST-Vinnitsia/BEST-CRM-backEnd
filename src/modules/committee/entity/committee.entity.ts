import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICommittee } from '../../../interfaces/committee/committee.interface';

export class Committee implements ICommittee {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
