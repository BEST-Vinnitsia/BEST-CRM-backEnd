import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { ExcludedDto_c, MemberIdDto_c, NewEventIdDto_c, ResponsibleIdDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    ICreateRes,
    IDeleteArrayRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetByNewEventIdRes,
    IGetByResponsibleIdRes,
    IGetListRes,
} from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class MemberToNewEventGetListEntity
    extends IntersectionType(IdDto_c, NewEventIdDto_c, ExcludedDto_c, ResponsibleIdDto_c, MemberIdDto_c)
    implements IGetListRes {}

export class MemberToNewEventGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, NewEventIdDto_c, ExcludedDto_c, ResponsibleIdDto_c, MemberIdDto_c)
    implements IGetByIdRes {}

export class MemberToNewEventGetByNewEventIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, NewEventIdDto_c, ExcludedDto_c, ResponsibleIdDto_c, MemberIdDto_c)
    implements IGetByNewEventIdRes {}

export class MemberToNewEventGetByResponsibleIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, NewEventIdDto_c, ExcludedDto_c, ResponsibleIdDto_c, MemberIdDto_c)
    implements IGetByResponsibleIdRes {}

export class MemberToNewEventGetByMemberIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, NewEventIdDto_c, ExcludedDto_c, ResponsibleIdDto_c, MemberIdDto_c)
    implements IGetByMemberIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class MemberToNewEventByIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class MemberToNewEventDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
