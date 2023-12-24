import { IsNotEmpty, IsString } from 'class-validator';

export class MemberGetByEmailDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}
