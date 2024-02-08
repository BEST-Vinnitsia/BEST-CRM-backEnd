import { IsBoolean, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceCreate } from 'src/interfaces/meeting/cadence.interface';

export class CreateDto implements ICadenceCreate {
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
    @IsNotEmpty()
    @IsDateString()
    endDate: Date;
}
