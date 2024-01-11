import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorUpdateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsBoolean()
  committeeIsActive: boolean;
}
