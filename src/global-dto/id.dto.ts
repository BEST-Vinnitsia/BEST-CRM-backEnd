import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;
}
