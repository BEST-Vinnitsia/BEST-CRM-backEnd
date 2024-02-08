import { IsNotEmpty, IsString, IsUUID, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Type } from 'class-transformer';
import { ISocialNetworkCreate } from '../../../interfaces/member/socialNetwork.type';

export class SocialNetworkCreateDto implements ISocialNetworkCreate {
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

export class SocialNetworkCreateDtoArray {
    @ApiProperty({ type: [SocialNetworkCreateDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => SocialNetworkCreateDto)
    socialNetworks: SocialNetworkCreateDto[];
}
