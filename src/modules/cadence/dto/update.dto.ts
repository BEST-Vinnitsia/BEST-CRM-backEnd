import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceUpdate } from 'src/interfaces/meeting/cadence.interface';
import { randomUUID } from 'crypto';

export class UpdateDto implements ICadenceUpdate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;

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
