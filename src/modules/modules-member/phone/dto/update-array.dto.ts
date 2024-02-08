import { IsArray, IsBoolean, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Type } from 'class-transformer';
import { IPhoneUpdate } from '../../../../interfaces/member/phone.type';

class UpdateArrayDto implements IPhoneUpdate {
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
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isMain: boolean;
}

export class UpdateArrayDto {
    @ApiProperty({ type: [UpdateArrayDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => UpdateArrayDto)
    phones: UpdateArrayDto[];
}
