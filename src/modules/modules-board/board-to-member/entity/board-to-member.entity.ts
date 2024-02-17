import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { BoardIdDto_c, CadenceIdDto_c, ExcludedDto_c, MemberIdDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    ICreateRes,
    IDeleteArrayRes,
    IGetByBoardIdRes,
    IGetByCadenceIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
} from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class BoardToMemberGetListEntity
    extends IntersectionType(IdDto_c, CadenceIdDto_c, MemberIdDto_c, BoardIdDto_c, ExcludedDto_c)
    implements IGetListRes {}

export class BoardToMemberGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, BoardIdDto_c, ExcludedDto_c)
    implements IGetByIdRes {}

export class BoardToMemberGetByBoardIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, BoardIdDto_c, ExcludedDto_c)
    implements IGetByBoardIdRes {}

export class BoardToMemberGetByCadenceIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, BoardIdDto_c, ExcludedDto_c)
    implements IGetByCadenceIdRes {}

export class BoardToMemberGetByMemberIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, BoardIdDto_c, ExcludedDto_c)
    implements IGetByMemberIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class BoardToMemberIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class BoardToMemberDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
