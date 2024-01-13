import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardGetById } from 'src/interfaces/board.interface';

export class BoardGetByIdDto implements IBoardGetById {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
