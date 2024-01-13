import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorDelete } from 'src/interfaces/coordinator.interface';
import { randomUUID } from 'crypto';

export class CoordinatorDeleteDto implements ICoordinatorDelete{
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
