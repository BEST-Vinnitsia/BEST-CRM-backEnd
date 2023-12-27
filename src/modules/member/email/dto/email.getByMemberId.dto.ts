import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Email_GetByMemberId_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
