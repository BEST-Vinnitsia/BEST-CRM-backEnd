import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceDelete } from 'src/interfaces/cadence.interface';

export class CadenceDeleteDto implements ICadenceDelete{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
