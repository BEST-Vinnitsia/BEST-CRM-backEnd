import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMemberDelete } from 'src/interfaces/member/member.type';
import { randomUUID } from 'crypto';

export class MemberDeleteDto implements IMemberDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
