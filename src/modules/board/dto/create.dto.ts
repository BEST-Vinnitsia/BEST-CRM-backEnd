import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { BoardEnum } from 'src/constants/enums';

export class BoardCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(BoardEnum)
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
