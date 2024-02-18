import { IsBoolean, IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IsLeaderDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isLeader: boolean;
}

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
