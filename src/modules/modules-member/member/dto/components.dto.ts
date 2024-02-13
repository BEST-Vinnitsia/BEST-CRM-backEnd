import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Matches } from 'class-validator';
import { ClothingSizeEnum, MembershipEnum } from '../../../../constants/enums.constant';
import { Regex } from '../../../../constants/regex.constant';
import { IsDateWithinRange } from '../../../../pipes/isDateWithinRange.pipe';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class MembershipDto {
    @ApiProperty({ enum: MembershipEnum, example: MembershipEnum.FULL })
    @IsNotEmpty()
    @IsString()
    @IsEnum(MembershipEnum)
    membership: string;
}

export class MemberAuthDto {
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

export class MemberBestEmailDto {
    @ApiProperty({ example: 'name.surname@best-eu.org' })
    @IsString()
    @IsEmail()
    @IsOptional()
    bestEmail: string | null;
}

export class MemberMessageDto {
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

export class MemberNameDto {
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

export class MemberBirthdayDto {
    @ApiProperty({ example: new Date('2000-01-01') })
    @IsNotEmpty()
    @IsDateString()
    @IsDateWithinRange(new Date('1900-01-01'), new Date())
    birthday: Date;
}

export class MemberUniversityDto {
    @ApiProperty({ example: 'УБ-21б' })
    @IsNotEmpty()
    @IsString()
    group: string;

    @ApiProperty({ example: 'ФМІБ' })
    @IsNotEmpty()
    @IsString()
    faculty: string;
}

export class MemberSizeDto {
    @ApiProperty({ enum: ClothingSizeEnum, example: ClothingSizeEnum.M })
    @IsString()
    @IsEnum(ClothingSizeEnum)
    @IsOptional()
    clothingSize: string | null;
}

export class MemberAddressDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    homeAddress: string | null;
}

//
//
//

export class MemberCreateWithAllInfoBoardToMemberDto {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    boardId: string;
}

export class MemberCreateWithAllInfoCoordinatorToMemberDto {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    coordinatorId: string;
}

export class MemberCreateWithAllInfoCommitteeToMemberDto {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    committeeId: string;
}

export class MemberCreateWithAllInfoEventToMemberDto {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    eventId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    responsibleId: string;
}