import { AtDateDto, IdDto } from '../../../../global-dto';
import {
    MemberAddressDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberBirthdayDto,
    MemberMessageDto,
    MemberNameDto,
    MembershipDto,
    MemberSizeDto,
    MemberUniversityDto,
} from '../dto/components.dto';
import { IntersectionType } from '@nestjs/swagger';

export class MemberEntity extends IntersectionType(
    IdDto,
    MembershipDto,
    MemberAuthDto,
    MemberBestEmailDto,
    MemberMessageDto,
    MemberNameDto,
    MemberBirthdayDto,
    MemberUniversityDto,
    MemberSizeDto,
    MemberAddressDto,
    AtDateDto,
) {}
