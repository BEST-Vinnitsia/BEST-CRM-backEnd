import { AtDateDto } from '../../../../global-dto';
import {
    IdDto,
    MemberAddressDto,
    MemberBestEmailDto,
    MemberBirthdayDto,
    MemberMessageDto,
    MemberNameDto,
    MembershipDto,
    MemberSizeDto,
    MemberUniversityDto,
} from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class MemberGetListEntity
    extends IntersectionType(IdDto, MembershipDto, MemberBestEmailDto, MemberMessageDto, MemberNameDto, MemberBirthdayDto, MemberUniversityDto)
    implements IGetListRes {}

export class MemberGetByIdEntity
    extends IntersectionType(
        IdDto,
        MembershipDto,
        MemberBestEmailDto,
        MemberMessageDto,
        MemberNameDto,
        MemberBirthdayDto,
        MemberUniversityDto,
        MemberSizeDto,
        MemberAddressDto,
        AtDateDto,
    )
    implements IGetByIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class MemberIdEntity extends IntersectionType(IdDto) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class MemberDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
