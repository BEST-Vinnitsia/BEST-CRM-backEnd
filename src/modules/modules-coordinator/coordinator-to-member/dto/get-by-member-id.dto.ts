import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMemberGetByMemberId } from '../../../../interfaces/coordinator/coordinator-to-member.interface';

export class GetByMemberIdDto implements ICoordinatorToMemberGetByMemberId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;
}
