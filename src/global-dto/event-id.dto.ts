import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    eventId: number;
}

export class EventIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    eventId: string;
}
