import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorCommitteeToMember_GetById_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
