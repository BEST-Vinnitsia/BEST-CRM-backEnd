import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BoardToMemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
