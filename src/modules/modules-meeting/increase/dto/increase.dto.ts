import { IntersectionType } from '@nestjs/swagger';
import { MeetingIdDto_c, MemberIdDto_c, MembershipDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IGetByMeetingIdReq, IGetByMemberIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class IncreaseGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

export class IncreaseGetByMemberIdDto extends IntersectionType(MemberIdDto_c) implements IGetByMemberIdReq {}

export class IncreaseGetByMeetingIdDto extends IntersectionType(MeetingIdDto_c) implements IGetByMeetingIdReq {}

/* ----------- POST ----------- */
export class IncreaseCreateDto extends IntersectionType(MembershipDto_c, MemberIdDto_c, MeetingIdDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class IncreaseUpdateDto extends IntersectionType(IdDto_c, MembershipDto_c, MemberIdDto_c, MeetingIdDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class IncreaseDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class IncreaseDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
