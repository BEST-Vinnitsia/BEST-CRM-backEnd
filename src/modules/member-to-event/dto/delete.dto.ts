import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMemberToEventDeleteArray } from '../../../interfaces/event/member-to-event.interface';

export class MemberToEventDeleteArrayDto implements IMemberToEventDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    membersToEventsId: string[];
}
