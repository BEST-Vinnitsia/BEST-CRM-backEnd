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

export class CommitteeIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    committeeId: number;
}

export class IsLeaderDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isLeader: boolean;
}

export class ExcludedDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean;

    @IsOptional()@ApiProperty()
    @IsOptional()
    @IsDateString()
    excludedDate: Date;
}
