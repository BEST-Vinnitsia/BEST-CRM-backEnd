import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberDeleteArray } from '../../../../interfaces/member/member.type';
import { randomUUID } from 'crypto';

export class DeleteArrayDto implements IMemberDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    membersId: string[];
}
