import { IntersectionType } from '@nestjs/swagger';
import { CadenceIdDto_c, DateDto_c, NameDto_c, TypeDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByCadenceIdReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class MeetingGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

export class MeetingGetByCadenceIdDto extends IntersectionType(CadenceIdDto_c) implements IGetByCadenceIdReq {}

/* ----------- POST ----------- */
export class MeetingCreateDto extends IntersectionType(NameDto_c, TypeDto_c, DateDto_c, CadenceIdDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class MeetingUpdateDto extends IntersectionType(IdDto_c, NameDto_c, TypeDto_c, DateDto_c, CadenceIdDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class MeetingDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class MeetingDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
