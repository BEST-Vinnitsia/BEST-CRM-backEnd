import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemberIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    memberId: number;
}

export class MemberIdStringDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    memberId: string;
}
