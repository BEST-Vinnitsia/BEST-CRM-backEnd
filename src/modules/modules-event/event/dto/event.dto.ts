import { IntersectionType } from '@nestjs/swagger';
import { IsActiveDto_c, NameDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c, IdStringDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class EventGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class EventCreateDto extends IntersectionType(NameDto_c, IsActiveDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class EventUpdateDto extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class EventDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class EventDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
