import { IntersectionType } from '@nestjs/swagger';
import { ExcludedDto_c } from './components.dto';
import {
    ICreateReq,
    IDeleteArrayReq,
    IDeleteReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IGetByNewEventIdReq,
    IGetByResponsibleIdReq,
    IUpdateReq,
} from '../interfaces/req.interface';
import {
    IdArrayDto_c,
    IdDto_c,
    IdStringDto_c,
    MemberIdDto_c,
    MemberIdStringDto_c,
    NewEventIdDto_c,
    NewEventIdStringDto_c,
    ResponsibleIdDto_c,
    ResponsibleIdStringDto_c,
} from '../../../../global-dto';

/* ----------- GET ----------- */
export class NewEventToMemberGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

export class NewEventToMemberGetByNewEventIdDto extends IntersectionType(NewEventIdStringDto_c) implements IGetByNewEventIdReq {}

export class NewEventToMemberGetByResponsibleIdDto extends IntersectionType(ResponsibleIdStringDto_c) implements IGetByResponsibleIdReq {}

export class NewEventToMemberGetByMemberIdDto extends IntersectionType(MemberIdStringDto_c) implements IGetByMemberIdReq {}

/* ----------- POST ----------- */
export class NewEventToMemberCreateDto
    extends IntersectionType(MemberIdDto_c, ResponsibleIdDto_c, NewEventIdDto_c, ExcludedDto_c)
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class NewEventToMemberUpdateDto
    extends IntersectionType(IdDto_c, MemberIdDto_c, ResponsibleIdDto_c, NewEventIdDto_c, ExcludedDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class NewEventToMemberDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class NewEventToMemberDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
