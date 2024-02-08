import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ISocialNetworkListByMemberId } from '../../../../interfaces/member/socialNetwork.type';

export class SocialNetworkGetListDto implements ISocialNetworkListByMemberId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;
}
