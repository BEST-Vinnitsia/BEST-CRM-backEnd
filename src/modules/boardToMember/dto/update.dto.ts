import { IsBoolean, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { BoardEnum } from 'src/constants/enums';

export class BoardToMemberUpdateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  boardId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @IsNotEmpty()
  @IsBoolean()
  isLeader: boolean;
}
