import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { MeetingIdDto_c, MemberIdDto_c, MembershipDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetByMeetingIdRes, IGetByMemberIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class IncreaseGetListEntity extends IntersectionType(IdDto_c, MeetingIdDto_c, MemberIdDto_c, MembershipDto_c) implements IGetListRes {}

export class IncreaseGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, MeetingIdDto_c, MemberIdDto_c, MembershipDto_c)
    implements IGetByIdRes {}

export class IncreaseGetByMeetingIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, MeetingIdDto_c, MemberIdDto_c, MembershipDto_c)
    implements IGetByMeetingIdRes {}

export class IncreaseGetByMemberIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, MeetingIdDto_c, MemberIdDto_c, MembershipDto_c)
    implements IGetByMemberIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class IncreaseIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class IncreaseDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
