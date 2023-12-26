import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CadenceGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
