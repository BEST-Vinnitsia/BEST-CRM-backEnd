import { IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { MeetingEnum } from 'src/constants/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IMeetingUpdate } from 'src/interfaces/meeting.interface';
import { randomUUID } from 'crypto';

export class MeetingUpdateDto implements IMeetingUpdate {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

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
