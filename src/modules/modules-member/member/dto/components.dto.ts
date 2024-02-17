import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { ClothingSizeEnum, MembershipEnum } from '../../../../constants/enums.constant';
import { Regex } from '../../../../constants/regex.constant';
import { IsDateWithinRange } from '../../../../pipes/isDateWithinRange.pipe';
import { ApiProperty } from '@nestjs/swagger';

export class MembershipDto_c {
    @ApiProperty({ enum: MembershipEnum, example: MembershipEnum.FULL })
    @IsNotEmpty()
    @IsString()
    @IsEnum(MembershipEnum)
    membership: string;
}

export class AuthDto_c {
    @ApiProperty({ example: 'login@email.com' })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    login: string;

    @ApiProperty({ example: 'P@ssword1234' })
    @IsNotEmpty()
    @IsString()
    @Matches(Regex.member.password, { message: 'Incorrect password' })
    password: string;
}

export class BestEmailDto_c {
    @ApiProperty({ example: 'name.surname@best-eu.org' })
    @IsString()
    @IsEmail()
    @IsOptional()
    bestEmail: string;
}

export class MessageDto_c {
    @ApiProperty({ example: 'mail@mail.com' })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: '+380123456789' })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: '@telegram' })
    @IsString()
    @IsNotEmpty()
    socialNetwork: string;
}

export class NameDto_c {
    @ApiProperty({ example: 'Name' })
    @IsNotEmpty()
    @IsString()
    @Matches(Regex.member.name)
    name: string;

    @ApiProperty({ example: 'Surname' })
    @IsNotEmpty()
    @IsString()
    @Matches(Regex.member.surname)
    surname: string;

    @ApiProperty({ example: 'Middle' })
    @IsNotEmpty()
    @IsString()
    @Matches(Regex.member.middleName)
    middleName: string;
}

export class BirthdayDto_c {
    @ApiProperty({ example: new Date('2000-01-01') })
    @IsNotEmpty()
    @IsDateString()
    @IsDateWithinRange(new Date('1900-01-01'), new Date())
    birthday: Date;
}

export class UniversityDto_c {
    @ApiProperty({ example: 'УБ-21б' })
    @IsNotEmpty()
    @IsString()
    group: string;

    @ApiProperty({ example: 'ФМІБ' })
    @IsNotEmpty()
    @IsString()
    faculty: string;
}

export class SizeDto_c {
    @ApiProperty({ enum: ClothingSizeEnum, example: ClothingSizeEnum.M })
    @IsString()
    @IsEnum(ClothingSizeEnum)
    @IsOptional()
    clothingSize: string;
}

export class AddressDto_c {
    @ApiProperty()
    @IsString()
    @IsOptional()
    homeAddress: string;
}
