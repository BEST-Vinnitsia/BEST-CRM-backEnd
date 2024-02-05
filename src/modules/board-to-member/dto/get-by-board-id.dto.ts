import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberGetByBoardId } from 'src/interfaces/board/board-to-member.interface';
import { randomUUID } from 'crypto';

export class BoardToMemberGetByBoardIdDto implements IBoardToMemberGetByBoardId {
    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    boardId: string;
}
