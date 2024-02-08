import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorDeleteArray } from '../../../../interfaces/coordinator/coordinator.interface';

export class CoordinatorDeleteArrayDto implements ICoordinatorDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    coordinatorsId: string[];
}
