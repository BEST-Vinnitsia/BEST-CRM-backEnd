import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { CoordinatorEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorCreate } from 'src/interfaces/coordinator.interface';

export class CoordinatorCreateDto implements ICoordinatorCreate {
  @ApiProperty({ enum: CoordinatorEnum })
  @IsNotEmpty()
  @IsString()
  @IsEnum(CoordinatorEnum)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  committeeIsActive: boolean;
}
