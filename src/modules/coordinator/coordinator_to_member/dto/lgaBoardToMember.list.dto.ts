import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMember_List_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  coordinator_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadence_id: string;
}
