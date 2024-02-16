import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemberIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    memberId: number;
}

export class MeetingIdDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    meetingId: number;
}

export class MembershipDto_c {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    membership: string;
}
