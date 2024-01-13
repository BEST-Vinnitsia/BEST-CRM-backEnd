import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberGetById } from 'src/interfaces/board-to-member.interface';

export class BoardToMemberGetByIdDto implements IBoardToMemberGetById {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
