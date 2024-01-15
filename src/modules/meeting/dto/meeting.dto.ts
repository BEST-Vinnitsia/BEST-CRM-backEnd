import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { MeetingEnum } from 'src/constants/enums.constant';
import { IMeeting } from 'src/interfaces/meeting.interface';

export class MeetingDto implements IMeeting {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ enum: MeetingEnum })
  name: string;

  @ApiProperty({ example: randomUUID() })
  cadenceId: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
