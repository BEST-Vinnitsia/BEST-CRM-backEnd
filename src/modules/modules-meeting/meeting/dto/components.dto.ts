import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CadenceIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    cadenceId: number;
}

export class NameDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
}

export class TypeDto_c {
    @ApiProperty({ example: 'LGA | GM' })
    @IsNotEmpty()
    @IsString()
    type: string;
}

export class DateDto_c {
    @IsOptional()
    @ApiProperty()
    @IsOptional()
    @IsDateString()
    date: Date;
}
