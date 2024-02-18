import { AtDateDto_c, IdDto_c, CadenceIdDto_c, EventIdDto_c } from '../../../../global-dto';
import { NameDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByCadenceIdRes, IGetByEventIdRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class NewEventGetListEntity extends IntersectionType(IdDto_c, EventIdDto_c, NameDto_c, CadenceIdDto_c) implements IGetListRes {}

export class NewEventGetByIdEntity extends IntersectionType(IdDto_c, AtDateDto_c, EventIdDto_c, NameDto_c, CadenceIdDto_c) implements IGetByIdRes {}

export class NewEventGetByEventIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, EventIdDto_c, NameDto_c, CadenceIdDto_c)
    implements IGetByEventIdRes {}

export class NewEventGetByCadenceIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, EventIdDto_c, NameDto_c, CadenceIdDto_c)
    implements IGetByCadenceIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class NewEventIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class NewEventDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
