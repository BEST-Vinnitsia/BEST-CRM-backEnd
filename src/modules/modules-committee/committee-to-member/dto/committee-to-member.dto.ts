import { IntersectionType } from '@nestjs/swagger';
import { ExcludedDto_c, IsLeaderDto_c } from './components.dto';
import {
    ICreateReq,
    IDeleteArrayReq,
    IDeleteReq,
    IGetByCadenceIdReq,
    IGetByCommitteeIdReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IUpdateReq,
} from '../interfaces/req.interface';
import {
    IdArrayDto_c,
    IdDto_c,
    CadenceIdDto_c,
    CommitteeIdDto_c,
    MemberIdDto_c,
    IdStringDto_c,
    CommitteeIdStringDto_c,
    CadenceIdStringDto_c,
    MemberIdStringDto_c,
} from '../../../../global-dto';

/* ----------- GET ----------- */
export class CommitteeToMemberGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

export class CommitteeToMemberGetByMemberIdDto extends IntersectionType(MemberIdStringDto_c) implements IGetByMemberIdReq {}

export class CommitteeToMemberGetByCadenceIdDto extends IntersectionType(CadenceIdStringDto_c) implements IGetByCadenceIdReq {}

export class CommitteeToMemberGetByCommitteeIdDto extends IntersectionType(CommitteeIdStringDto_c) implements IGetByCommitteeIdReq {}

/* ----------- POST ----------- */
export class CommitteeToMemberCreateDto
    extends IntersectionType(ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, CommitteeIdDto_c, IsLeaderDto_c)
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class CommitteeToMemberUpdateDto
    extends IntersectionType(IdDto_c, ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, CommitteeIdDto_c, IsLeaderDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CommitteeToMemberDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class CommitteeToMemberDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
