import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
    IdDto,
    MemberAddressDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberBirthdayDto,
    MemberMessageDto,
    MemberNameDto,
    MembershipDto,
    MemberSizeDto,
    MemberUniversityDto,
} from './components.dto';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ICreateReq, IDeleteArrayReq, IDeleteReq, IGetByIdReq, IUpdateReq } from '../interfaces/req.interface';

/* ----------- GET ----------- */
export class MemberGetByIdDto extends IntersectionType(IdDto) implements IGetByIdReq {}

/* ----------- POST ----------- */
export class MemberCreateDto
    extends IntersectionType(
        MembershipDto,
        MemberAuthDto,
        MemberBestEmailDto,
        MemberMessageDto,
        MemberNameDto,
        MemberBirthdayDto,
        MemberUniversityDto,
        MemberSizeDto,
        MemberAddressDto,
    )
    implements ICreateReq {}

/* ----------- PUT ----------- */
export class MemberUpdateDto
    extends IntersectionType(
        IdDto,
        MembershipDto,
        MemberBestEmailDto,
        MemberMessageDto,
        MemberNameDto,
        MemberBirthdayDto,
        MemberUniversityDto,
        MemberSizeDto,
        MemberAddressDto,
    )
    implements IUpdateReq {}

/* ----------- DELETE ----------- */
export class MemberDeleteDto extends IntersectionType(IdDto) implements IDeleteReq {}

export class MemberDeleteArrayDto implements IDeleteArrayReq {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
