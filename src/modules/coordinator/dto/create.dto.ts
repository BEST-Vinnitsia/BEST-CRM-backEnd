import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { CoordinatorEnum } from 'src/constants/enums';

export class CoordinatorCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(CoordinatorEnum)
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsBoolean()
  committeeIsActive: boolean;
}
