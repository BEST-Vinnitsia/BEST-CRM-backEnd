import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IBoardToMember } from '../../../../interfaces/board/board-to-member.interface';

export class BoardToMember implements IBoardToMember {
    @ApiProperty({ example: randomUUID() })
    id: string;

    @ApiProperty({ example: randomUUID() })
    cadenceId: string;

    @ApiProperty({ example: randomUUID() })
    boardId: string;

    @ApiProperty({ example: randomUUID() })
    memberId: string;

    @ApiProperty()
    excluded: boolean;

    @ApiProperty()
    excludedDate: Date;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
