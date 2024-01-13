import { IsNotEmpty, IsString, IsEnum, IsDateString, IsUUID } from 'class-validator';
import { MeetingEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IMeetingCreate } from 'src/interfaces/meeting.interface';

export class MeetingCreateDto implements IMeetingCreate {
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
