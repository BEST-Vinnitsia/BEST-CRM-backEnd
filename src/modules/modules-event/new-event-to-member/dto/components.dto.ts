import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewEventIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    newEventId: number;
}

export class ResponsibleIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    responsibleId: number;
}

export class MemberIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    memberId: number;
}

export class ExcludedDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean;

    @ApiProperty({ example: new Date('2000-01-01') })
    @IsOptional()
    @IsDateString()
    excludedDate: Date;
}
