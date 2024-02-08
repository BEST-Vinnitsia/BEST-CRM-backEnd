import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberGetByCadenceId } from 'src/interfaces/board/board-to-member.interface';
import { randomUUID } from 'crypto';

export class BoardToMemberGetByCadenceIdDto implements IBoardToMemberGetByCadenceId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    cadenceId: string;
}
