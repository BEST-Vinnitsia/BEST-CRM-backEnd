import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
