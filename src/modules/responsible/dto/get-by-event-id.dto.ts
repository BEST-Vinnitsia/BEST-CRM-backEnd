import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IResponsibleGetByEventId } from '../../../interfaces/event/responsible.interface';

export class ResponsibleGetByEventIdDto implements IResponsibleGetByEventId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    eventId: string;
}
