import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IEmailDelete } from '../../../../interfaces/member/email.type';

export class DeleteArrayDto implements IEmailDelete {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    emailsId: string[];
}
