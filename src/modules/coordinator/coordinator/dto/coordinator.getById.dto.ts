import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Coordinator_GetById_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
