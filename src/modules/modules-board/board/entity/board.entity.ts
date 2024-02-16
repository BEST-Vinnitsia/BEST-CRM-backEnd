import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { NameDto_c, IsActiveDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class BoardGetListEntity extends IntersectionType(IdDto_c, NameDto_c, IsActiveDto_c) implements IGetListRes {}

export class BoardGetByIdEntity extends IntersectionType(IdDto_c, AtDateDto_c, NameDto_c, IsActiveDto_c) implements IGetByIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class BoardIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class BoardDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
