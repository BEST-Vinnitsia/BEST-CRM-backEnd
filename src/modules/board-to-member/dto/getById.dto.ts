import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberGetById } from 'src/interfaces/board-to-member.interface';
import { randomUUID } from 'crypto';

export class BoardToMemberGetByIdDto implements IBoardToMemberGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
