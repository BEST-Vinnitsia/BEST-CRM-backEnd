import { IntersectionType } from '@nestjs/swagger';
import { ExcludedDto_c } from './components.dto';
import {
    ICreateReq,
    IDeleteArrayReq,
    IDeleteReq,
    IGetByCadenceIdReq,
    IGetByCoordinatorIdReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IUpdateReq,
} from '../interfaces/req.interface';
import {
    CadenceIdDto_c,
    CadenceIdStringDto_c,
    CoordinatorIdDto_c,
    CoordinatorIdStringDto_c,
    IdArrayDto_c,
    IdDto_c,
    IdStringDto_c,
    MemberIdDto_c,
    MemberIdStringDto_c,
} from '../../../../global-dto';

/* ----------- GET ----------- */
export class CoordinatorToMemberGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

export class CoordinatorToMemberGetByMemberIdDto extends IntersectionType(MemberIdStringDto_c) implements IGetByMemberIdReq {}

export class CoordinatorToMemberGetByCadenceIdDto extends IntersectionType(CadenceIdStringDto_c) implements IGetByCadenceIdReq {}

export class CoordinatorToMemberGetByCoordinatorIdDto extends IntersectionType(CoordinatorIdStringDto_c) implements IGetByCoordinatorIdReq {}

/* ----------- POST ----------- */
export class CoordinatorToMemberCreateDto
    extends IntersectionType(ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, CoordinatorIdDto_c)
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class CoordinatorToMemberUpdateDto
    extends IntersectionType(IdDto_c, ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, CoordinatorIdDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CoordinatorToMemberDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class CoordinatorToMemberDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
