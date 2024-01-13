import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IMeetingGetById } from 'src/interfaces/meeting.interface';
import { randomUUID } from 'crypto';

export class MeetingGetByIdDto implements IMeetingGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
