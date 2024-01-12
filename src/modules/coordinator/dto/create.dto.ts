import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { CoordinatorEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';

export class CoordinatorCreateDto {
  @ApiProperty()
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
