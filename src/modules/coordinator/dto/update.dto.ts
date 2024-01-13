import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorUpdate } from 'src/interfaces/coordinator.interface';
import { randomUUID } from 'crypto';

export class CoordinatorUpdateDto implements ICoordinatorUpdate {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  committeeIsActive: boolean;
}
