import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceDeleteArray } from 'src/interfaces/meeting/cadence.interface';
import { randomUUID } from 'crypto';

export class CadenceDeleteArrayDto implements ICadenceDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    cadencesId: string[];
}
