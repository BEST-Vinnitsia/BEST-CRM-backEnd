import { IsDateString, IsNotEmpty } from 'class-validator';

export class LgaCreateDto {
  @IsNotEmpty()
  @IsDateString()
  event_date: Date;
}
