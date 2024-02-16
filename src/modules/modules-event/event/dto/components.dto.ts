import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NameDto_c {
    @ApiProperty({ example: 'MW' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Motivational weekend' })
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
