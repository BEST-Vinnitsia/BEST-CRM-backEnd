import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { CadenceIdDto_c, CoordinatorIdDto_c, ExcludedDto_c, MemberIdDto_c } from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import {
    ICreateReq,
    IDeleteArrayReq,
    IDeleteReq,
    IGetByCadenceIdReq,
    IGetByCoordinatorIdReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IUpdateReq,
} from '../interfaces/req.interface';
import { IdDto_c } from '../../../../global-dto';

/* ----------- GET ----------- */
export class CoordinatorToMemberGetByIdDto extends IntersectionType(IdDto_c) implements IGetByIdReq {}

export class CoordinatorToMemberGetByMemberIdDto extends IntersectionType(MemberIdDto_c) implements IGetByMemberIdReq {}

export class CoordinatorToMemberGetByCadenceIdDto extends IntersectionType(CadenceIdDto_c) implements IGetByCadenceIdReq {}

export class CoordinatorToMemberGetByCoordinatorIdDto extends IntersectionType(CoordinatorIdDto_c) implements IGetByCoordinatorIdReq {}

/* ----------- POST ----------- */
export class CoordinatorToMemberCreateDto
    extends IntersectionType(ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, CoordinatorIdDto_c)
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class CoordinatorToMemberUpdateDto
    extends IntersectionType(IdDto_c, ExcludedDto_c, MemberIdDto_c, CadenceIdDto_c, CoordinatorIdDto_c)
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class CoordinatorToMemberDeleteDto extends IntersectionType(IdDto_c) implements IDeleteReq {}

export class CoordinatorToMemberDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
