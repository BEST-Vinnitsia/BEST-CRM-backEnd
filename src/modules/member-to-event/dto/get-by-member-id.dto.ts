import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IMemberToEventGetByMemberId } from '../../../interfaces/event/member-to-event.interface';

export class MemberToEventGetByMemberIdDto implements IMemberToEventGetByMemberId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;
}
