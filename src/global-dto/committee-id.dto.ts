import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CommitteeIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    committeeId: number;
}

export class CommitteeIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    committeeId: string;
}
