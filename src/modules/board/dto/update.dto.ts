import { IsBoolean, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { BoardEnum } from 'src/constants/enums';

export class BoardUpdateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsBoolean()
  committeeIsActive: boolean;
}
