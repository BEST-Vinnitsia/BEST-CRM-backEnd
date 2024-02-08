import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMemberToEventUpdate } from '../../../../interfaces/event/member-to-event.interface';

export class UpdateDto implements IMemberToEventUpdate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    newEventId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    responsibleId: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    excludedDate?: Date;
}
