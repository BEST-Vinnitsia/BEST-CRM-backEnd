import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMember } from 'src/interfaces/coordinator-to-member.interface';

export class CoordinatorToMemberDto implements ICoordinatorToMember {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ example: randomUUID() })
  cadenceId: string;

  @ApiProperty({ example: randomUUID() })
  coordinatorId: string;

  @ApiProperty({ example: randomUUID() })
  memberId: string;

  @ApiProperty()
  isLeader: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
