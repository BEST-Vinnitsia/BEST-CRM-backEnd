import { IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMeetingCreate } from '../../../../interfaces/meeting/meeting.interface';
import { MeetingEnum } from '../../../../constants/enums.constant';

export class MeetingCreateDto implements IMeetingCreate {
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