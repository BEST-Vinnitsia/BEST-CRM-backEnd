import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICommitteeToMemberGetByCommitteeId } from '../../../../interfaces/committee/committee-to-member.interface';

export class CommitteeToMemberGetByCommitteeIdDto implements ICommitteeToMemberGetByCommitteeId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    committeeId: string;
}
