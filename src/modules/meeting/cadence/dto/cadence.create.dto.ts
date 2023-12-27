import { IsDateString, IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class Cadence_Create_Dto {
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
