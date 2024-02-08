import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMemberToEventGetByResponsibleId } from '../../../../interfaces/event/member-to-event.interface';

export class GetByResponsibleIdDto implements IMemberToEventGetByResponsibleId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    responsibleId: string;
}
