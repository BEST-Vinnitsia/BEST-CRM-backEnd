import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ClothingSizeEnum } from '../../../../constants/enums.constant';
import { IMember } from '../../../../interfaces/member/member.type';

export class Member implements IMember {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    membership: string;

    //

    @ApiProperty()
    login: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    bestEmail: string | null;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    socialNetwork: string;

    //

    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    middleName: string;

    @ApiProperty()
    birthday: Date;

    //

    @ApiProperty()
    group: string;

    @ApiProperty()
    faculty: string;

    //

    @ApiProperty({ enum: ClothingSizeEnum })
    clothingSize: string | null;

    @ApiProperty()
    homeAddress: string | null;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
