import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMemberDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
