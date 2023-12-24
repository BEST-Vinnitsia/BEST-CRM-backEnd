import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberEmailGetByMemberIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
