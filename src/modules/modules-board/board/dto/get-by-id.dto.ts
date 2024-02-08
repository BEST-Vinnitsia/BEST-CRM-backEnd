import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardGetById } from 'src/interfaces/board/board.interface';
import { randomUUID } from 'crypto';

export class GetByIdDto implements IBoardGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
