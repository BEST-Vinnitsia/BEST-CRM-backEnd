import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Meeting_GetById_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
