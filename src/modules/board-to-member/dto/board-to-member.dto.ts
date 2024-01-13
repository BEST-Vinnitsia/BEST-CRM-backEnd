import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IBoardToMember } from 'src/interfaces/board-to-member.interface';

export class BoardToMemberDto implements IBoardToMember {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ example: randomUUID() })
  cadenceId: string;

  @ApiProperty({ example: randomUUID() })
  boardId: string;

  @ApiProperty({ example: randomUUID() })
  memberId: string;

  @ApiProperty()
  isLeader: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
