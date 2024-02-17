import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdArrayDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
