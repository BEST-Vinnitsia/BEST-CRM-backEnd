import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
