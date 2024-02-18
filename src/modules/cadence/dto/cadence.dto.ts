import { IntersectionType } from '@nestjs/swagger';
import { DateDto_c, IsEndDto_c, NumberDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { AtDateDto_c, IdArrayDto_c, IdDto_c, IdStringDto_c } from '../../../global-dto';

/* ----------- GET ----------- */
export class CadenceGetByIdDto extends IntersectionType(IdStringDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class CadenceCreateDto extends IntersectionType(NumberDto_c, IsEndDto_c, DateDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class CadenceUpdateDto extends IntersectionType(IdDto_c, AtDateDto_c, NumberDto_c, IsEndDto_c, DateDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CadenceDeleteDto extends IntersectionType(IdStringDto_c) implements IDeleteReq {}

export class CadenceDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
