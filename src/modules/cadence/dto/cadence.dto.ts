import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { DateDto_c, IsEndDto_c, NumberDto_c } from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { AtDateDto_c, IdDto_c } from '../../../global-dto';

/* ----------- GET ----------- */
export class CadenceGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class CadenceCreateDto extends IntersectionType(NumberDto_c, IsEndDto_c, DateDto_c) implements ICreateReq {}

/* ----------- PUT ----------- */
export class CadenceUpdateDto extends IntersectionType(IdDto_c, AtDateDto_c, NumberDto_c, IsEndDto_c, DateDto_c) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CadenceDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class CadenceDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
