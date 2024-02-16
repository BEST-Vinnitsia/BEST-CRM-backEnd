import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { CadenceIdDto_c, DateDto_c, NameDto_c, TypeDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByCadenceIdRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class MeetingGetListEntity extends IntersectionType(IdDto_c, CadenceIdDto_c, NameDto_c, TypeDto_c, DateDto_c) implements IGetListRes {}

export class MeetingGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, NameDto_c, TypeDto_c, DateDto_c)
    implements IGetByIdRes {}

export class MeetingGetByCadenceIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, CadenceIdDto_c, NameDto_c, TypeDto_c, DateDto_c)
    implements IGetByCadenceIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class MeetingIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class MeetingDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
