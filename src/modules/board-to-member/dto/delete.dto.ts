import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberDelete } from 'src/interfaces/board-to-member.interface';
import { randomUUID } from 'crypto';

export class BoardToMemberDeleteDto implements IBoardToMemberDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
