import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMembershipDelete } from 'src/interfaces/member/membership.type';
import { randomUUID } from 'crypto';

export class MembershipDeleteDto implements IMembershipDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
