import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { CoordinatorEnum } from 'src/constants/enums.constant';
import { ICoordinator } from 'src/interfaces/coordinator.interface';

export class CoordinatorDto implements ICoordinator {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ enum: CoordinatorEnum })
  name: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  committeeIsActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
