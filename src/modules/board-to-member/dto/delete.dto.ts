import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberDelete } from 'src/interfaces/board-to-member.interface';

export class BoardToMemberDeleteDto implements IBoardToMemberDelete {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
