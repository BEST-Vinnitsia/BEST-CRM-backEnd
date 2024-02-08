import { IsArray, IsBoolean, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Type } from 'class-transformer';
import { ISocialNetworkUpdate } from '../../../../interfaces/member/socialNetwork.type';

class UpdateDto implements ISocialNetworkUpdate {
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

export class UpdateArrayDto {
    @ApiProperty({ type: [UpdateDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => UpdateDto)
    socialNetworks: UpdateDto[];
}
