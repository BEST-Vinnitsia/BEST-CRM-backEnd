import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinator } from '../../../interfaces/coordinator/coordinator.interface';

export class Coordinator implements ICoordinator {
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
