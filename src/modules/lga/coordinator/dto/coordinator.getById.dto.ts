import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
