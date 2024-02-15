import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    MemberAddressDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberBirthdayDto,
    MemberCreateWithAllInfoBoardToMemberDto,
    MemberCreateWithAllInfoCommitteeToMemberDto,
    MemberCreateWithAllInfoCoordinatorToMemberDto,
    MemberCreateWithAllInfoEventToMemberDto,
    MemberMessageDto,
    MemberNameDto,
    MembershipDto,
    MemberSizeDto,
    MemberUniversityDto,
} from './components.dto';
import { IMemberDeleteArray } from '../../../../interfaces/member/member.type';
import { randomUUID } from 'crypto';
import { IsArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { IdDto } from '../../../../global-dto';
import { Type } from 'class-transformer';

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

export class MemberCreateWithAllInfoDto extends IntersectionType(
    MembershipDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberMessageDto,
    MemberNameDto,
    MemberBirthdayDto,
    MemberUniversityDto,
    MemberSizeDto,
    MemberAddressDto,
) {
    @ApiProperty({ type: [MemberCreateWithAllInfoBoardToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoBoardToMemberDto)
    boardToMember: MemberCreateWithAllInfoBoardToMemberDto[];

    @ApiProperty({ type: [MemberCreateWithAllInfoCoordinatorToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoCoordinatorToMemberDto)
    coordinatorToMember: MemberCreateWithAllInfoCoordinatorToMemberDto[];

    @ApiProperty({ type: [MemberCreateWithAllInfoCommitteeToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoCommitteeToMemberDto)
    committeeToMember: MemberCreateWithAllInfoCommitteeToMemberDto[];

    @ApiProperty({ type: [MemberCreateWithAllInfoEventToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoEventToMemberDto)
    eventToMember: MemberCreateWithAllInfoEventToMemberDto[];
}

export class MemberUpdateWithAllInfoDto extends IntersectionType(
    IdDto,
    MembershipDto,
    MemberBestEmailDto,
    MemberMessageDto,
    MemberNameDto,
    MemberBirthdayDto,
    MemberUniversityDto,
    MemberSizeDto,
    MemberAddressDto,
) {
    @ApiProperty({ type: [MemberCreateWithAllInfoBoardToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoBoardToMemberDto)
    boardToMember: MemberCreateWithAllInfoBoardToMemberDto[];

    @ApiProperty({ type: [MemberCreateWithAllInfoCoordinatorToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoCoordinatorToMemberDto)
    coordinatorToMember: MemberCreateWithAllInfoCoordinatorToMemberDto[];

    @ApiProperty({ type: [MemberCreateWithAllInfoCommitteeToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoCommitteeToMemberDto)
    committeeToMember: MemberCreateWithAllInfoCommitteeToMemberDto[];

    @ApiProperty({ type: [MemberCreateWithAllInfoEventToMemberDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => MemberCreateWithAllInfoEventToMemberDto)
    eventToMember: MemberCreateWithAllInfoEventToMemberDto[];
}

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
