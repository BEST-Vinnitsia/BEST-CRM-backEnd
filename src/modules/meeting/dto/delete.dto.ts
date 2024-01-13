import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMeetingDelete } from 'src/interfaces/meeting.interface';
import { randomUUID } from 'crypto';

export class MeetingDeleteDto implements IMeetingDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
