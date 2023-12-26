import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class BoardCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @IsNotEmpty()
  @IsBoolean()
  committee_is_active: boolean;
}
