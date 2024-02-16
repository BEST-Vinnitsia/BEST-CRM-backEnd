import { AtDateDto_c, IdDto_c } from '../../../global-dto';
import { DateDto_c, IsEndDto_c, NumberDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class CadenceGetListEntity extends IntersectionType(IdDto_c, NumberDto_c, IsEndDto_c, DateDto_c) implements IGetListRes {}

export class CadenceGetByIdEntity extends IntersectionType(IdDto_c, AtDateDto_c, NumberDto_c, IsEndDto_c, DateDto_c) implements IGetByIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class CadenceIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class CadenceDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
