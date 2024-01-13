import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMeetingDelete } from 'src/interfaces/meeting.interface';

export class MeetingDeleteDto implements IMeetingDelete {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
