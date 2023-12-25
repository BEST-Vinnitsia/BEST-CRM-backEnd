import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TranslationCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  lga_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  membership_id: string;
}
