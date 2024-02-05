import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEmail } from '../../../interfaces/member/email.type';

export class Email implements IEmail {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    isMain: boolean;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
