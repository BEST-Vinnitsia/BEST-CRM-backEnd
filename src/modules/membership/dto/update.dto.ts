import { IsNotEmpty, IsString, IsEnum, IsUUID } from 'class-validator';
import { MembershipEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IMembershipUpdate } from 'src/interfaces/member/membership.type';
import { randomUUID } from 'crypto';

export class MembershipUpdateDto implements IMembershipUpdate {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(MembershipEnum)
  name: string;
}
