import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IIncreaseCreate } from '../../../../interfaces/meeting/increase.interface';

export class IncreaseCreateDto implements IIncreaseCreate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    meetingId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    membership: string;
}
