import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResponsibleIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    responsibleId: number;
}

export class ResponsibleIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    responsibleId: string;
}
