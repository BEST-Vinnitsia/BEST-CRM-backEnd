import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Cadence_GetById_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
