import { IsNotEmpty, IsString, IsEnum, IsUUID } from 'class-validator';
import { MembershipEnum } from 'src/constants/enums';

export class MembershipUpdateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(MembershipEnum)
  name: string;
}
