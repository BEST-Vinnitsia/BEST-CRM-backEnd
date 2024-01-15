import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { MembershipEnum } from 'src/constants/enums.constant';
import { IMembership } from 'src/interfaces/member/membership.type';

export class MembershipDto implements IMembership {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ enum: MembershipEnum })
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
