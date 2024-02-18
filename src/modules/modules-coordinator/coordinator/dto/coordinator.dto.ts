import { IntersectionType } from '@nestjs/swagger';
import { IsActiveDto_c, NameDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c, IdStringDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class CoordinatorGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class CoordinatorCreateDto extends IntersectionType(NameDto_c, IsActiveDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class CoordinatorUpdateDto extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CoordinatorDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class CoordinatorDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
