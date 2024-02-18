import { IntersectionType } from '@nestjs/swagger';
import { NameDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByCadenceIdReq, IGetByEventIdReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { CadenceIdDto_c, CadenceIdStringDto_c, EventIdDto_c, EventIdStringDto_c, IdArrayDto_c, IdDto_c, IdStringDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class NewEventGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

export class NewEventGetEventByIdDto extends IntersectionType(EventIdStringDto_c) implements IGetByEventIdReq {}

export class NewEventGetCadenceByIdDto extends IntersectionType(CadenceIdStringDto_c) implements IGetByCadenceIdReq {}

/* ----------- POST ----------- */
export class NewEventCreateDto extends IntersectionType(EventIdDto_c, NameDto_c, CadenceIdDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class NewEventUpdateDto extends IntersectionType(IdDto_c, NameDto_c, CadenceIdDto_c, EventIdDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class NewEventDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class NewEventDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
