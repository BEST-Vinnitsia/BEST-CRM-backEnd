import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MeetingDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
