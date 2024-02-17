import { IntersectionType } from '@nestjs/swagger';
import {
    AddressDto_c,
    AuthDto_c,
    BestEmailDto_c,
    BirthdayDto_c,
    MembershipDto_c,
    MessageDto_c,
    NameDto_c,
    SizeDto_c,
    UniversityDto_c,
} from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class MemberGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class MemberCreateDto
    extends IntersectionType(
        MembershipDto_c,
        AuthDto_c,
        BestEmailDto_c,
        MessageDto_c,
        NameDto_c,
        BirthdayDto_c,
        UniversityDto_c,
        SizeDto_c,
        AddressDto_c,
    )
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class MemberUpdateDto
    extends IntersectionType(
        IdDto_c,
        MembershipDto_c,
        BestEmailDto_c,
        MessageDto_c,
        NameDto_c,
        BirthdayDto_c,
        UniversityDto_c,
        SizeDto_c,
        AddressDto_c,
    )
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class MemberDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class MemberDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
