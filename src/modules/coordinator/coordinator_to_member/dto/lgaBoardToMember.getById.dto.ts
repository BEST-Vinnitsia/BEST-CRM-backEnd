import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMember_GetById_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
