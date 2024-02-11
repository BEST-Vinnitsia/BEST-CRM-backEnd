import { IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMeetingUpdate } from '../../../../interfaces/meeting/meeting.interface';
import { MeetingEnum } from '../../../../constants/enums.constant';

export class MeetingUpdateDto implements IMeetingUpdate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEnum(MeetingEnum)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    date: Date;
}
