import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoordinatorIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    coordinatorId: number;
}

export class CoordinatorIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    coordinatorId: string;
}
