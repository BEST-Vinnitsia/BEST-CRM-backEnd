import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberDeleteByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
