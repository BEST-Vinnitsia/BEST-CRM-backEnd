import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';

export class CoordinatorToMemberCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  coordinatorId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @IsNotEmpty()
  @IsBoolean()
  isLeader: boolean;
}
