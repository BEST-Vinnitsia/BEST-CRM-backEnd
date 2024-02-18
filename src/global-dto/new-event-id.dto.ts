import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewEventIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    newEventId: number;
}

export class NewEventIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    newEventId: string;
}
