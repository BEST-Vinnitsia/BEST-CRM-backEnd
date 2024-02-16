import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemberIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    memberId: number;
}

export class CadenceIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    cadenceId: number;
}

export class CoordinatorIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    coordinatorId: number;
}

export class ExcludedDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean;

    @IsOptional()
    @ApiProperty()
    @IsOptional()
    @IsDateString()
    excludedDate: Date;
}
