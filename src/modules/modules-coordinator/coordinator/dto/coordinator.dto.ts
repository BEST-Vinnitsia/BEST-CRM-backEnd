import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { IsActiveDto_c, NameDto_c } from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class CoordinatorGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class CoordinatorCreateDto extends IntersectionType(NameDto_c, IsActiveDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class CoordinatorUpdateDto extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CoordinatorDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class CoordinatorDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
