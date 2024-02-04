import { IsArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEmailDelete } from '../../../interfaces/member/email.type';

export class EmailDeleteDto implements IEmailDelete {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString({each: true})
    @IsArray()
    @IsUUID('4', {each: true})
    emailsId: string[];
}
