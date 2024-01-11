import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CadenceDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
