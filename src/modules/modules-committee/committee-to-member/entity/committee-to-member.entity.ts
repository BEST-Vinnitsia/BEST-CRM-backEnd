import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { CadenceIdDto_c, CommitteeIdDto_c, ExcludedDto_c, IsLeaderDto_c, MemberIdDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    ICreateRes,
    IDeleteArrayRes,
    IGetByCadenceIdRes,
    IGetByCommitteeIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
} from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class CommitteeToMemberGetListEntity
    extends IntersectionType(IdDto_c, CadenceIdDto_c, MemberIdDto_c, CommitteeIdDto_c, ExcludedDto_c, IsLeaderDto_c)
    implements IGetListRes {}

export class CommitteeToMemberGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CommitteeIdDto_c, ExcludedDto_c, IsLeaderDto_c)
    implements IGetByIdRes {}

export class CommitteeToMemberGetByBoardIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CommitteeIdDto_c, ExcludedDto_c, IsLeaderDto_c)
    implements IGetByCommitteeIdRes {}

export class CommitteeToMemberGetByCadenceIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CommitteeIdDto_c, ExcludedDto_c, IsLeaderDto_c)
    implements IGetByCadenceIdRes {}

export class CommitteeToMemberGetByMemberIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, MemberIdDto_c, CommitteeIdDto_c, ExcludedDto_c, IsLeaderDto_c)
    implements IGetByMemberIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class CommitteeToMemberIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class CommitteeToMemberDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
