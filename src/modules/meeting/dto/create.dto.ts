import { IsNotEmpty, IsString, IsEnum, IsBoolean, IsDateString, IsUUID } from 'class-validator';
import { MeetingEnum } from 'src/constants/enums';

export class MeetingCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(MeetingEnum)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
