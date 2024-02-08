import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMemberGetByCoordinatorId } from '../../../../interfaces/coordinator/coordinator-to-member.interface';

export class GetByCoordinatorIdDto implements ICoordinatorToMemberGetByCoordinatorId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    coordinatorId: string;
}
