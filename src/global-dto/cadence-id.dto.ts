import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CadenceIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    cadenceId: number;
}

export class CadenceIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    cadenceId: string;
}
