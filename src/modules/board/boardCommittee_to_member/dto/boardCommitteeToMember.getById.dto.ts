import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BoardCommitteeToMemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
