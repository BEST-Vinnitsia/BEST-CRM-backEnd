import { AtDateDto } from '../../../../global-dto';
import {
    IdDto,
    MemberAddressDto,
    MemberBestEmailDto,
    MemberBirthdayDto,
    MemberMessageDto,
    MemberNameDto,
    MembershipDto,
    MemberSizeDto,
    MemberUniversityDto,
} from '../dto/components.dto';
import { IntersectionType } from '@nestjs/swagger';
import { IMemberPrisma } from '../../../../interfaces/prisma';

interface IMemberEntity extends Omit<IMemberPrisma, 'password' | 'login'> {}

export class MemberEntity
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
        AtDateDto,
    )
    implements IMemberEntity {}
