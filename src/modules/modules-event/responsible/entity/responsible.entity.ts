import { AtDateDto_c, IdDto_c } from '../../../../global-dto';
import { DescriptionDto_c, EventIdDto_c, IsActiveDto_c, NameDto_c, RoleDto_c } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByEventIdRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class ResponsibleGetListEntity
    extends IntersectionType(IdDto_c, EventIdDto_c, NameDto_c, IsActiveDto_c, DescriptionDto_c, RoleDto_c)
    implements IGetListRes {}

export class ResponsibleGetByIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, EventIdDto_c, NameDto_c, IsActiveDto_c, DescriptionDto_c, RoleDto_c)
    implements IGetByIdRes {}

export class ResponsibleGetByEventIdEntity
    extends IntersectionType(IdDto_c, AtDateDto_c, EventIdDto_c, NameDto_c, IsActiveDto_c, DescriptionDto_c, RoleDto_c)
    implements IGetByEventIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class ResponsibleIdEntity extends IntersectionType(IdDto_c) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class ResponsibleDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
