import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceDelete } from 'src/interfaces/cadence.interface';
import { randomUUID } from 'crypto';

export class CadenceDeleteDto implements ICadenceDelete{
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
