import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SocialNetwork_GetByMemberId_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
