import { IsNotEmpty, IsString, IsUUID, IsEmail, IsBoolean, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEmailUpdate } from '../../../interfaces/member/email.type';
import { Type } from 'class-transformer';

export class EmailUpdateDto implements IEmailUpdate {
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

export class EmailUpdateDtoArray {
    @ApiProperty({ type: [EmailUpdateDto] })
    @ValidateNested({ each: true })
    @IsArray()
    @IsNotEmpty()
    @Type(() => EmailUpdateDto)
    emails: EmailUpdateDto[];
}