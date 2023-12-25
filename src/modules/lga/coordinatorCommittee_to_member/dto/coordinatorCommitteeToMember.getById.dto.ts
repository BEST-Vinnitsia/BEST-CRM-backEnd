import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorCommitteeToMemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
