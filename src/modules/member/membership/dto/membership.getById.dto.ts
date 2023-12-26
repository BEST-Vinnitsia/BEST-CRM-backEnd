import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MembershipGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
