import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExcludedDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean;

    @ApiProperty({ example: new Date('2000-01-01') })
    @IsOptional()
    @IsDateString()
    excludedDate: Date;
}
