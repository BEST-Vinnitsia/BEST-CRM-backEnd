import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SocialNetwork_Create_Dto {
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
