import { IsNotEmpty, IsString, IsEnum, IsUUID } from 'class-validator';
import { MembershipEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';

export class MembershipUpdateDto {
  @ApiProperty()
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
