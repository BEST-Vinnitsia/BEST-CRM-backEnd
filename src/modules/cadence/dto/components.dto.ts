import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NumberDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    number: number;
}

export class IsEndDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isEnd: boolean;
}

export class DateDto_c {
    @ApiProperty({ example: new Date('2000-01-01') })
    @IsDateString()
    @IsOptional()
    startDate: Date;

    @ApiProperty({ example: new Date('2000-01-01') })
    @IsDateString()
    @IsOptional()
    endDate: Date
}
