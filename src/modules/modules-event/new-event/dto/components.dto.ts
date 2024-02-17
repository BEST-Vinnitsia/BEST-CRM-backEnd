import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    eventId: number;
}

export class CadenceIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    cadenceId: number;
}

export class NameDto_c {
    @ApiProperty({ example: '' })
    @IsNotEmpty()
    @IsString()
    name: string;
}
