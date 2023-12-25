import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LgaBoardCommitteeToMemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
