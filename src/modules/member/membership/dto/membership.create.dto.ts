import { IsNotEmpty, IsString } from 'class-validator';

export class MembershipCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
