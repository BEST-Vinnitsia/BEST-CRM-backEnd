import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, IsEmail, Matches, IsEnum } from 'class-validator';
import { ClothingSizeEnum } from 'src/constants/enums.constant';
import { Regex } from 'src/constants/regex.constant';
import { IsDateWithinRange } from 'src/pipes/isDateWithinRange.pipe';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberCreate } from 'src/interfaces/member/member.type';
import { randomUUID } from 'crypto';

export class MemberCreateDto implements IMemberCreate {
  @ApiProperty({ example: randomUUID() })
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

  @ApiProperty({ required: false })
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

  @ApiProperty({ required: false, enum: ClothingSizeEnum })
  @IsNotEmpty()
  @IsString()
  @IsEnum(ClothingSizeEnum)
  @IsOptional()
  clothingSize: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  homeAddress: string;
}
