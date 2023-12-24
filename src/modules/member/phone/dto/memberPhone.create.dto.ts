import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberPhoneCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
