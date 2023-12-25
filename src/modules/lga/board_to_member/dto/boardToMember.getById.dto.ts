import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LgaBoardToMemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
