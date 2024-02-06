import { IsNotEmpty, IsString, IsUUID, IsEmail, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Type } from 'class-transformer';
import { IPhoneCreate } from '../../../interfaces/member/phone.type';

export class PhoneCreateDto implements IPhoneCreate {
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

export class PhoneCreateDtoArray {
    @ApiProperty({ type: [PhoneCreateDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => PhoneCreateDto)
    phones: PhoneCreateDto[];
}
