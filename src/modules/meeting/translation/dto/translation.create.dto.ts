import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Translation_Create_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  meeting_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membership_id: string;
}
