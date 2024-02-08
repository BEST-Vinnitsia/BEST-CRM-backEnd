import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMemberGetByCadenceId } from '../../../interfaces/coordinator/coordinator-to-member.interface';

export class CoordinatorToMemberGetByCadenceIdDto implements ICoordinatorToMemberGetByCadenceId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;
}
