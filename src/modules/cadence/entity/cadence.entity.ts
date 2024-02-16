import { AtDateDto } from '../../../global-dto';
import { CadenceDateDto, CadenceIsEndDto, CadenceNumberDto, IdDto } from '../dto/components.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ICreateRes, IDeleteArrayRes, IGetByIdRes, IGetListRes } from '../interfaces/res.interface';

/* ----------------  GET  ---------------- */
export class CadenceGetListEntity extends IntersectionType(IdDto, CadenceNumberDto, CadenceIsEndDto, CadenceDateDto) implements IGetListRes {}

export class CadenceGetByIdEntity
    extends IntersectionType(IdDto, AtDateDto, CadenceNumberDto, CadenceIsEndDto, CadenceDateDto)
    implements IGetByIdRes {}

/* ----------------  POST  ---------------- */
/* ----------------  PUT  ---------------- */

/* ----------------  DELETE  ---------------- */
export class CadenceIdEntity extends IntersectionType(IdDto) implements ICreateRes {}

/* ----------------  DELETE  ---------------- */
export class CadenceDeleteArrayEntity implements IDeleteArrayRes {
    @ApiProperty()
    count: number;
}
