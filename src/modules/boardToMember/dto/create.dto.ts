import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';

export class BoardToMemberCreateDto {
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
