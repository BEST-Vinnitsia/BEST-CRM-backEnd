import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorDelete } from 'src/interfaces/coordinator.interface';

export class CoordinatorDeleteDto implements ICoordinatorDelete{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
