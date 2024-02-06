import { IsNotEmpty, IsString, IsUUID, IsEmail, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEmailCreate } from '../../../interfaces/member/email.type';
import { Type } from 'class-transformer';

export class CreateDto implements IEmailCreate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isMain: boolean;
}

export class EmailCreateDtoArray {
    @ApiProperty({ type: [CreateDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => CreateDto)
    emails: CreateDto[];
}