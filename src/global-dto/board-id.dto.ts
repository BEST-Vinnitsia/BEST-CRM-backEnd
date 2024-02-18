import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BoardIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    boardId: number;
}

export class BoardIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    boardId: string;
}