import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LgaGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
