import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ISocialNetwork } from '../../../../interfaces/member/socialNetwork.type';

export class SocialNetwork implements ISocialNetwork {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty()
    url: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    isMain: boolean;

    //

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
