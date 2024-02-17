import { IntersectionType } from '@nestjs/swagger';
import { BoardIdDto_c, CadenceIdDto_c, ExcludedDto_c, MemberIdDto_c } from './components.dto';
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
import { IdArrayDto_c, IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class BoardToMemberGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

export class BoardToMemberGetByMemberIdDto extends IntersectionType(MemberIdDto_c) implements IGetByMemberIdReq {}

export class BoardToMemberGetByCadenceIdDto extends IntersectionType(CadenceIdDto_c) implements IGetByCadenceIdReq {}

export class BoardToMemberGetByBoardIdDto extends IntersectionType(BoardIdDto_c) implements IGetByBoardIdReq {}

/* ----------- POST ----------- */
export class BoardToMemberCreateDto extends IntersectionType(ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, BoardIdDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class BoardToMemberUpdateDto
    extends IntersectionType(IdDto_c, ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, BoardIdDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class BoardToMemberDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class BoardToMemberDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
