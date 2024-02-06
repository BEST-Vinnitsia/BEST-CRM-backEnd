import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { BoardEnum } from 'src/constants/enums.constant';
import { IBoard } from 'src/interfaces/board/board.interface';

export class Board implements IBoard {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ enum: BoardEnum })
  name: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
