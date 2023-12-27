import { IsBoolean, IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMember_Create_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  coordinator_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadence_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
