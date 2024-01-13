import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ITranslationCreate } from 'src/interfaces/translation.interface';

export class TranslationCreateDto implements ITranslationCreate {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  meetingId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membershipId: string;
}
