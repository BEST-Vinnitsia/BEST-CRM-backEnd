import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { MembershipEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';

export class MembershipCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(MembershipEnum)
  name: string;
}
