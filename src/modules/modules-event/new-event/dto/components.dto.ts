import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NameDto_c {
    @ApiProperty({ example: '' })
    @IsNotEmpty()
    @IsString()
    name: string;
}
