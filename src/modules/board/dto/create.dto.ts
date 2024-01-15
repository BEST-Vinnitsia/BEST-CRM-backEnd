import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { BoardEnum } from 'src/constants/enums.constant';
import { IBoardCreate } from 'src/interfaces/board.interface';

export class BoardCreateDto implements IBoardCreate {
  @ApiProperty({ enum: BoardEnum })
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
