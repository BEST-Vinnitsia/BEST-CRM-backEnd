import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { IResponsibleCreate } from '../../../../interfaces/event/responsible.interface';
import { randomUUID } from 'crypto';

export class ResponsibleCreateDto implements IResponsibleCreate {
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
