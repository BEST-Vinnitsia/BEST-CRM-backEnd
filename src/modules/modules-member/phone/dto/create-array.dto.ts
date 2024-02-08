import { IsArray, IsBoolean, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Type } from 'class-transformer';
import { IPhoneCreate } from '../../../../interfaces/member/phone.type';

class CreateArrayDto implements IPhoneCreate {
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

export class CreateArrayDto {
    @ApiProperty({ type: [CreateArrayDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => CreateArrayDto)
    phones: CreateArrayDto[];
}
