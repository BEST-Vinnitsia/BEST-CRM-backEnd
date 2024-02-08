import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICommitteeToMemberGetByMemberId } from '../../../interfaces/committee/committee-to-member.interface';

export class CommitteeToMemberGetByMemberIdDto implements ICommitteeToMemberGetByMemberId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;
}
