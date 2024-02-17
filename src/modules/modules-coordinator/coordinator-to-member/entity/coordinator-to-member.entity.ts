import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { CadenceIdDto_c, CoordinatorIdDto_c, ExcludedDto_c, MemberIdDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    ICreateRes,
    IDeleteArrayRes,
    IGetByCadenceIdRes,
    IGetByCoordinatorIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
} from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class CoordinatorToMemberGetListEntity
    extends IntersectionType(IdDto_c, CadenceIdDto_c, MemberIdDto_c, CoordinatorIdDto_c, ExcludedDto_c)
    implements IGetListRes {}

export class CoordinatorToMemberGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CoordinatorIdDto_c, ExcludedDto_c)
    implements IGetByIdRes {}

export class CoordinatorToMemberGetByCoordinatorIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CoordinatorIdDto_c, ExcludedDto_c)
    implements IGetByCoordinatorIdRes {}

export class CoordinatorToMemberGetByCadenceIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CoordinatorIdDto_c, ExcludedDto_c)
    implements IGetByCadenceIdRes {}

export class CoordinatorToMemberGetByMemberIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CoordinatorIdDto_c, ExcludedDto_c)
    implements IGetByMemberIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class CoordinatorToMemberIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class CoordinatorToMemberDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
