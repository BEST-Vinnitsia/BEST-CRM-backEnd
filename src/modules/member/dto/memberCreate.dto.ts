import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, IsEmail, Matches, IsEnum, MinDate, MaxDate } from 'class-validator';
import { ClothingSizeEnum } from 'src/constants/enums';
import { Regex } from 'src/constants/regex';
import { IsDateWithinRange } from 'src/pipes/isDateWithinRange.pipe';

export class MemberCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membershipId: string;

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
  bestEmail: string;

  //

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.surname)
  surname: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.fullName)
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.middleName)
  middleName: string;

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
  clothingSize: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  homeAddress: string;
}
