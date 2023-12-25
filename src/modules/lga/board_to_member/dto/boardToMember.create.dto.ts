import { IsBoolean, IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BoardToMemberCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  board_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
