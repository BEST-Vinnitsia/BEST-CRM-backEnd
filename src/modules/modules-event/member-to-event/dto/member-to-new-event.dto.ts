import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ExcludedDto_c, MemberIdDto_c, NewEventIdDto_c, ResponsibleIdDto_c } from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
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
import { IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class MemberToNewEventGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}
export class MemberToNewEventGetByNewEventIdDto extends IntersectionType(NewEventIdDto_c) implements IGetByNewEventIdReq {}
export class MemberToNewEventGetByResponsibleIdDto extends IntersectionType(ResponsibleIdDto_c) implements IGetByResponsibleIdReq {}
export class MemberToNewEventGetByMemberIdDto extends IntersectionType(MemberIdDto_c) implements IGetByMemberIdReq {}

/* ----------- POST ----------- */
export class MemberToNewEventCreateDto
    extends IntersectionType(MemberIdDto_c, ResponsibleIdDto_c, NewEventIdDto_c, ExcludedDto_c)
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class MemberToNewEventUpdateDto
    extends IntersectionType(IdDto_c, MemberIdDto_c, ResponsibleIdDto_c, NewEventIdDto_c, ExcludedDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class MemberToNewEventDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class MemberToNewEventDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
