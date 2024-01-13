import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberCreate } from 'src/interfaces/board-to-member.interface';

export class BoardToMemberCreateDto implements IBoardToMemberCreate {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  boardId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isLeader: boolean;
}
