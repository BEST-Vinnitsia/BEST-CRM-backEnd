import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CadenceCreateDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
}
