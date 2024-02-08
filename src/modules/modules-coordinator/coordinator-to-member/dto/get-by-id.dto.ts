import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMemberGetById } from '../../../../interfaces/coordinator/coordinator-to-member.interface';

export class GetByIdDto implements ICoordinatorToMemberGetById {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    id: string;
}
