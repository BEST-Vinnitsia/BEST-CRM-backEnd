import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, IsEmail, Matches, IsEnum } from 'class-validator';
import { ClothingSizeEnum } from 'src/constants/enums';
import { Regex } from 'src/constants/regex';
import { IsDateWithinRange } from 'src/pipes/isDateWithinRange.pipe';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberUpdate } from 'src/interfaces/member/member.type';

export class MemberUpdateDto implements IMemberUpdate {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membershipId: string;

  //

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.password, { message: 'Incorrect password' })
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @IsOptional()
  bestEmail: string;

  //

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.surname)
  surname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.fullName)
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.middleName)
  middleName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @IsDateWithinRange(new Date('1900-01-01'), new Date())
  birthday: Date;

  //

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  group: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  faculty: string;

  //

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(ClothingSizeEnum)
  @IsOptional()
  clothingSize: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  homeAddress: string;
}
