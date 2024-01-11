import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BoardToMemberDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
