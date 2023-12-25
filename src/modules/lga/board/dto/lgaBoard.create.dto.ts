import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class LgaBoardCreateDto {
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
