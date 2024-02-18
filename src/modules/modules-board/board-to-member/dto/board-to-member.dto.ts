import { IntersectionType } from '@nestjs/swagger';
import { ExcludedDto_c } from './components.dto';
import {
    ICreateReq,
    IDeleteArrayReq,
    IDeleteReq,
    IGetByBoardIdReq,
    IGetByCadenceIdReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IUpdateReq,
} from '../interfaces/req.interface';
import {
    BoardIdDto_c,
    BoardIdStringDto_c,
    CadenceIdDto_c,
    CadenceIdStringDto_c,
    IdArrayDto_c,
    IdDto_c,
    IdStringDto_c,
    MemberIdDto_c,
    MemberIdStringDto_c,
} from '../../../../global-dto';

/* ----------- GET ----------- */
export class BoardToMemberGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

export class BoardToMemberGetByMemberIdDto extends IntersectionType(MemberIdStringDto_c) implements IGetByMemberIdReq {}

export class BoardToMemberGetByCadenceIdDto extends IntersectionType(CadenceIdStringDto_c) implements IGetByCadenceIdReq {}

export class BoardToMemberGetByBoardIdDto extends IntersectionType(BoardIdStringDto_c) implements IGetByBoardIdReq {}

/* ----------- POST ----------- */
export class BoardToMemberCreateDto extends IntersectionType(ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, BoardIdDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class BoardToMemberUpdateDto
    extends IntersectionType(IdDto_c, ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, BoardIdDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class BoardToMemberDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class BoardToMemberDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
