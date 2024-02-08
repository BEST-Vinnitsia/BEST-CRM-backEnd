import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ICoordinatorCreate } from '../../../../interfaces/coordinator/coordinator.interface';

export class CreateDto implements ICoordinatorCreate {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}
