import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IPhone } from '../../../../interfaces/member/phone.type';

export class Phone implements IPhone {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    isMain: boolean;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
