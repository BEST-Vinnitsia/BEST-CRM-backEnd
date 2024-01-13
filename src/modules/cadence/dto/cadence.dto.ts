import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICadence } from 'src/interfaces/cadence.interface';

export class CadenceDto implements ICadence {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty()
  number: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
