import { IsBoolean, IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMemberCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  coordinator_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;
}
