import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdArrayDto_c {
    @ApiProperty({ type: ['number'] })
    @IsNotEmpty()
    @IsNumber()
    @IsArray()
    id: number[];
}
