import { IsNotEmpty, IsString, IsEnum, IsBoolean, IsDateString, IsUUID } from 'class-validator';
import { MeetingEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';

export class MeetingCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(MeetingEnum)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
