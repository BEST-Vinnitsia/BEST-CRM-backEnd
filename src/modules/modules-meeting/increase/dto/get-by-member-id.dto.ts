import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IIncreaseGetByMemberId } from '../../../../interfaces/meeting/increase.interface';

export class IncreaseGetByMemberIdDto implements IIncreaseGetByMemberId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;
}
