import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LgaBoardGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
