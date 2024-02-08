import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IResponsible } from '../../../../interfaces/event/responsible.interface';

export class Responsible implements IResponsible {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    eventId: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    role: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
