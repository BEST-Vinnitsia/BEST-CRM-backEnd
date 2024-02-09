import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceCreate } from 'src/interfaces/cadence.interface';

export class CadenceCreateDto implements ICadenceCreate {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    number: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isEnd: boolean;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    endDate: Date | null;
}
