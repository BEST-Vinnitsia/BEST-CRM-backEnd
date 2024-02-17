import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { IsActiveDto_c, NameDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class CoordinatorGetListEntity extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c) implements IGetListRes {}

export class CoordinatorGetByIdEntity extends IntersectionType(IdDto_c, AtDateDto_c, NameDto_c, IsActiveDto_c) implements IGetByIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class CoordinatorIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class CoordinatorDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
