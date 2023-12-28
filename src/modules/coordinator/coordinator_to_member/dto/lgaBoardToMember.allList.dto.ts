import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMember_AllList_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadence_id: string;
}
