import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberEmailCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}
