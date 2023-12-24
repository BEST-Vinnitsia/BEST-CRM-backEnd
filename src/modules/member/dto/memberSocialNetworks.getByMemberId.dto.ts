import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberSocialNetworksGetByMemberIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
