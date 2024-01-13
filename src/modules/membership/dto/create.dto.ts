import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { MembershipEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IMembershipCreate } from 'src/interfaces/member/membership.type';

export class MembershipCreateDto implements IMembershipCreate {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(MembershipEnum)
  name: string;
}
