import { IsNotEmpty, IsString, IsUUID, IsBoolean, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Type } from 'class-transformer';
import { ISocialNetworkUpdate } from '../../../interfaces/member/socialNetwork.type';

export class SocialNetworkUpdateDto implements ISocialNetworkUpdate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    url: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isMain: boolean;
}

export class SocialNetworkUpdateDtoArray {
    @ApiProperty({ type: [SocialNetworkUpdateDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => SocialNetworkUpdateDto)
    socialNetworks: SocialNetworkUpdateDto[];
}
