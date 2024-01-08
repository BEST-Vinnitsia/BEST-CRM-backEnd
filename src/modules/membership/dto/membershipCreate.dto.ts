import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { MembershipEnum } from 'src/constants/enums';

export class MembershipCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(MembershipEnum)
  name: string;
}
