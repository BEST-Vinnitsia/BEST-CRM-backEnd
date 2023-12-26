import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MeetingCreateDto {
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadence_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
