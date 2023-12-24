import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberPhoneGetByMemberIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
