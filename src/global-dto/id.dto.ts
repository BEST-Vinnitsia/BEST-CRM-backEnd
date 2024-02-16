import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;
}
