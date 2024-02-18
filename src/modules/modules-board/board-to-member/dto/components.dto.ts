import { IsBoolean, IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExcludedDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean;

    @IsOptional()
    @ApiProperty()
    @IsOptional()
    @IsDateString()
    excludedDate: Date;
}
