import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Meeting_Create_Dto {
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
