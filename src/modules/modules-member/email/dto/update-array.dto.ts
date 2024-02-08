import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEmailUpdate } from '../../../../interfaces/member/email.type';
import { Type } from 'class-transformer';

class UpdateDto implements IEmailUpdate {
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
    @IsEmail()
    email: string;

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
    emails: UpdateDto[];
}