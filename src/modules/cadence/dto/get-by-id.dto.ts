import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICadenceGetById } from 'src/interfaces/meeting/cadence.interface';
import { randomUUID } from 'crypto';

export class CadenceGetByIdDto implements ICadenceGetById {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;
}
