import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardDelete } from 'src/interfaces/board/board.interface';
import { randomUUID } from 'crypto';

export class BoardDeleteDto implements IBoardDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
