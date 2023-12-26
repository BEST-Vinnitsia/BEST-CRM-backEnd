import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MeetingGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
