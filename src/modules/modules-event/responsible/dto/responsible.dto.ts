import { IntersectionType } from '@nestjs/swagger';
import { DescriptionDto_c, EventIdDto_c, IsActiveDto_c, NameDto_c, RoleDto_c } from './components.dto';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByEventIdReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdArrayDto_c, IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class ResponsibleGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

export class ResponsibleGetEventByIdDto extends IntersectionType(EventIdDto_c) implements IGetByEventIdReq {}

/* ----------- POST ----------- */
export class ResponsibleCreateDto
    extends IntersectionType(EventIdDto_c, NameDto_c, IsActiveDto_c, RoleDto_c, DescriptionDto_c)
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class ResponsibleUpdateDto
    extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c, EventIdDto_c, RoleDto_c, DescriptionDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class ResponsibleDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class ResponsibleDeleteArrayDto extends IntersectionType(IdArrayDto_c) implements IDeleteArrayReq {}
