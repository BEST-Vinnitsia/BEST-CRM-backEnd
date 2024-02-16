import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { DescriptionDto_c, EventIdDto_c, IsActiveDto_c, NameDto_c, RoleDto_c } from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class ResponsibleGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

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

export class ResponsibleDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
