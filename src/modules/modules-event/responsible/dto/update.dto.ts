import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IResponsibleUpdate } from '../../../../interfaces/event/responsible.interface';

export class ResponsibleUpdateDto implements IResponsibleUpdate {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    eventId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    role: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string | null;
}
