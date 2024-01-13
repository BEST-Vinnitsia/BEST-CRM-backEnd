import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorGetById } from 'src/interfaces/coordinator.interface';

export class CoordinatorGetByIdDto implements ICoordinatorGetById{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
