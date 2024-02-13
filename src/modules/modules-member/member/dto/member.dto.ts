import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    MemberAddressDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberBirthdayDto,
    MemberMessageDto,
    MemberNameDto,
    MembershipDto,
    MemberSizeDto,
    MemberUniversityDto,
} from './components.dto';
import { IMemberDeleteArray } from '../../../../interfaces/member/member.type';
import { randomUUID } from 'crypto';
import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { IdDto } from '../../../../global-dto';

/* ----------- GET ----------- */

export class MemberGetByIdDto extends IntersectionType(IdDto) {}

/* ----------- POST ----------- */
export class MemberCreateDto extends IntersectionType(
    MembershipDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberMessageDto,
    MemberNameDto,
    MemberBirthdayDto,
    MemberUniversityDto,
    MemberSizeDto,
    MemberAddressDto,
) {}

/* ----------- PUT ----------- */
export class MemberUpdateDto extends IntersectionType(
    IdDto,
    MembershipDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberMessageDto,
    MemberNameDto,
    MemberBirthdayDto,
    MemberUniversityDto,
    MemberSizeDto,
    MemberAddressDto,
) {}

/* ----------- DELETE ----------- */
export class MemberDeleteArrayDto implements IMemberDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    membersId: string[];
}
