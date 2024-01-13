import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMembershipGetById } from 'src/interfaces/member/membership.type';
import { randomUUID } from 'crypto';

export class MembershipGetByIdDto implements IMembershipGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
