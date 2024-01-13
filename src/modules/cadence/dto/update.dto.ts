import { IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceUpdate } from 'src/interfaces/cadence.interface';
import { randomUUID } from 'crypto';

export class CadenceUpdateDto implements ICadenceUpdate {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
}
