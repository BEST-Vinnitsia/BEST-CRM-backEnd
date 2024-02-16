import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CadenceNumberDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    number: number;
}

export class CadenceIsEndDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isEnd: boolean;
}

export class CadenceDateDto {
    @ApiProperty({ example: new Date('2000-01-01') })
    @IsDateString()
    @IsOptional()
    startDate: Date;

    @ApiProperty({ example: new Date('2000-01-01') })
    @IsDateString()
    @IsOptional()
    endDate: Date
}
