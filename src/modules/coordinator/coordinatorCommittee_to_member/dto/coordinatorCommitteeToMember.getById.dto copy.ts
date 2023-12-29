import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorCommitteeToMember_GetListByCadenceId_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadence_id: string;
}
