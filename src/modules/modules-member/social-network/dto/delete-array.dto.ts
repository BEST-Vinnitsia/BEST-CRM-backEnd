import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ISocialNetworkDelete } from '../../../../interfaces/member/socialNetwork.type';

export class SocialNetworkDeleteArrayDto implements ISocialNetworkDelete {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    socialNetworksId: string[];
}
