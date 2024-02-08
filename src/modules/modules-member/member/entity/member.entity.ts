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
    bestEmail: string;

    //

    @ApiProperty()
    surname: string;

    @ApiProperty()
    fullName: string;

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

    @ApiProperty({ required: false, enum: ClothingSizeEnum })
    clothingSize: string;

    @ApiProperty({ required: false })
    homeAddress: string;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
