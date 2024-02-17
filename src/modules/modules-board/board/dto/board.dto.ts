import { IntersectionType } from '@nestjs/swagger';
import { IsActiveDto_c, NameDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class BoardGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class BoardCreateDto extends IntersectionType(NameDto_c, IsActiveDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class BoardUpdateDto extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class BoardDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class BoardDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
