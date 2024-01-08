import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, IsEmail, Matches, IsEnum, MinDate, MaxDate } from 'class-validator';
import { ClothingSizeEnum } from 'src/constants/enums';
import { Regex } from 'src/constants/regex';
import { IsDateWithinRange } from 'src/pipes/isDateWithinRange.pipe';

export class MemberCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membership_id: string;

  //

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.password, { message: 'Incorrect password' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @IsOptional()
  best_email: string;

  //

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.surname)
  surname: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.full_name)
  full_name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.middle_name)
  middle_name: string;

  @IsNotEmpty()
  @IsDateString()
  @IsDateWithinRange(new Date('1900-01-01'), new Date())
  birthday: Date;

  //

  @IsNotEmpty()
  @IsString()
  group: string;

  @IsNotEmpty()
  @IsString()
  faculty: string;

  //

  @IsNotEmpty()
  @IsString()
  @IsEnum(ClothingSizeEnum)
  @IsOptional()
  clothing_size: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  home_address: string;
}
