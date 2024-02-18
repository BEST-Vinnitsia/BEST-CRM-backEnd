import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import {
    AddressDto_c,
    BestEmailDto_c,
    BirthdayDto_c,
    MembershipDto_c,
    MessageDto_c,
    NameDto_c,
    SizeDto_c,
    UniversityDto_c,
} from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class MemberGetListEntity
    extends IntersectionType(IdDto_c, MembershipDto_c, BestEmailDto_c, MessageDto_c, NameDto_c, BirthdayDto_c, UniversityDto_c)
    implements IGetListRes {} 

export class MemberGetByIdEntity
    extends IntersectionType(
        IdDto_c,
        MembershipDto_c,
        BestEmailDto_c,
        MessageDto_c,
        NameDto_c,
        BirthdayDto_c,
        UniversityDto_c,
        SizeDto_c,
        AddressDto_c,
        AtDateDto_c,
    )
    implements IGetByIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class MemberIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class MemberDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
