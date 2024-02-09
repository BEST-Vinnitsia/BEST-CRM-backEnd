import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMeetingGetById } from '../../../../interfaces/meeting/meeting.interface';

export class MeetingGetByIdDto implements IMeetingGetById {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;
}
