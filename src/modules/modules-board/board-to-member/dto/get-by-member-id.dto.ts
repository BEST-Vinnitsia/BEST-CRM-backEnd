import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberGetByMemberId } from 'src/interfaces/board/board-to-member.interface';
import { randomUUID } from 'crypto';

export class BoardToMemberGetByMemberIdDto implements IBoardToMemberGetByMemberId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    memberId: string;
}
