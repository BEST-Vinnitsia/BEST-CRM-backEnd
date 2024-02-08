import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { ClothingSizeEnum, MembershipEnum } from '../../../../constants/enums.constant';
import { Regex } from '../../../../constants/regex.constant';
import { IsDateWithinRange } from '../../../../pipes/isDateWithinRange.pipe';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberCreate } from '../../../../interfaces/member/member.type';

export class MemberCreateDto implements IMemberCreate {
    @ApiProperty({ required: false, enum: MembershipEnum })
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

    @ApiProperty({ required: false })
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
    @IsString()
    @IsEnum(ClothingSizeEnum)
    @IsOptional()
    clothingSize: string | null;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    homeAddress: string;
}
