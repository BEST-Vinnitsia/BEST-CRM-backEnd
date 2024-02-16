import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { CadenceDateDto, CadenceIsEndDto, CadenceNumberDto } from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';
import { IdDto } from '../../../global-dto';

/* ----------- GET ----------- */
export class CadenceGetByIdDto extends IntersectionType(IdDto) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class CadenceCreateDto extends IntersectionType(CadenceNumberDto, CadenceIsEndDto, CadenceDateDto) implements ICreateReq {}

/* ----------- PUT ----------- */
export class CadenceUpdateDto extends IntersectionType(IdDto, CadenceNumberDto, CadenceIsEndDto, CadenceDateDto) implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CadenceDeleteDto extends IntersectionType(IdDto) implements IDeleteReq {}

export class CadenceDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
