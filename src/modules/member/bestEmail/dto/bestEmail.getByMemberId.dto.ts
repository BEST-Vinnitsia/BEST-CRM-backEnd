import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BestEmail_GetByMemberId_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
