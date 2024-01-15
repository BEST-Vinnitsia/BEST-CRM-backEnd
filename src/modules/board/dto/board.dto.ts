import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { BoardEnum } from 'src/constants/enums.constant';
import { IBoard } from 'src/interfaces/board.interface';

export class BoardDto implements IBoard {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ enum: BoardEnum })
  name: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  committeeIsActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
