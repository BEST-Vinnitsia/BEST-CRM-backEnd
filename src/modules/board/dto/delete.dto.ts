import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BoardDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
