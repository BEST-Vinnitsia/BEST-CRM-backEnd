import { IsArray, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdArrayDto_c {
    @ApiProperty({ type: ['number'] })
    @IsNotEmpty()
    @IsArray()
    @IsInt({ each: true, message: 'Each ID must be an integer' })
    id: number[];
}
