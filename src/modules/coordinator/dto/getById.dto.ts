import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorGetById } from 'src/interfaces/coordinator.interface';
import { randomUUID } from 'crypto';

export class CoordinatorGetByIdDto implements ICoordinatorGetById{
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
