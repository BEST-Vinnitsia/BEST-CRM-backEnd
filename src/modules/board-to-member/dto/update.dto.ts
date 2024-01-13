import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberUpdate } from 'src/interfaces/board-to-member.interface';

export class BoardToMemberUpdateDto implements IBoardToMemberUpdate {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

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
