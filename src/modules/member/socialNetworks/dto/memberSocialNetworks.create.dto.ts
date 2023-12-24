import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberSocialNetworksCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
