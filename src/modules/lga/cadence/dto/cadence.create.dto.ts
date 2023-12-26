import { IsDateString, IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class CadenceCreateDto {
  @IsNotEmpty()
  @IsDateString()
  start_date: Date;

  @IsNotEmpty()
  @IsDateString()
  end_date: Date;

  @IsNotEmpty()
  @IsNumberString()
  number: number;
}
