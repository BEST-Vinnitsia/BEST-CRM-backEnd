import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberBestEmailGetByMemberIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
