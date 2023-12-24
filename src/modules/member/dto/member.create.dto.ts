import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MemberCreateDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsNotEmpty()
  @IsString()
  middle_name: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: Date;

  @IsNotEmpty()
  @IsString()
  group: string;

  @IsNotEmpty()
  @IsString()
  faculty: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membership_id: string;
}
