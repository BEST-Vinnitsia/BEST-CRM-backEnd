import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { BoardEnum } from 'src/constants/enums';

export class BoardCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(BoardEnum)
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsBoolean()
  committeeIsActive: boolean;
}
