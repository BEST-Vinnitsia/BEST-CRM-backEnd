import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberGetId } from '../../../../interfaces/member/member.type';
import { randomUUID } from 'crypto';

export class GetByIdDto implements IMemberGetId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;
}
