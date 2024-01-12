import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TranslationUpdateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  meetingId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membershipId: string;
}
