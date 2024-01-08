import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MembershipDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
