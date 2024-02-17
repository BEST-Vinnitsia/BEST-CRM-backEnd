import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    eventId: number;
}

export class NameDto_c {
    @ApiProperty({ example: 'MO | FR | HR | Food ...' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Main organizer' })
    @IsNotEmpty()
    @IsString()
    fullName: string;
}

export class IsActiveDto_c {
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isActive: boolean;
}

export class RoleDto_c {
    @ApiProperty({ example: 'Resp | WG | Day Resp' })
    @IsNotEmpty()
    @IsString()
    role: string;
}

export class DescriptionDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;
}
