import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BoardGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
