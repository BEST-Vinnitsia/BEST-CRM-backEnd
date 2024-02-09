import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Matches } from 'class-validator';
import { ClothingSizeEnum, MembershipEnum } from '../../../../constants/enums.constant';
import { Regex } from '../../../../constants/regex.constant';
import { IsDateWithinRange } from '../../../../pipes/isDateWithinRange.pipe';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberUpdate } from '../../../../interfaces/member/member.type';
import { randomUUID } from 'crypto';

export class MemberUpdateDto implements IMemberUpdate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;

    @ApiProperty({ enum: MembershipEnum })
    @IsNotEmpty()
    @IsString()
    @IsEnum(MembershipEnum)
    membership: string;

    //

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    login: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Matches(Regex.member.password, { message: 'Incorrect password' })
    password: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsOptional()
    bestEmail: string | null;

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

    @ApiProperty({ enum: ClothingSizeEnum })
    @IsString()
    @IsEnum(ClothingSizeEnum)
    @IsOptional()
    clothingSize: string | null;

    @ApiProperty()
    @IsString()
    @IsOptional()
    homeAddress: string | null;
}
