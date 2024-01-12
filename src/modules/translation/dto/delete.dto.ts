import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TranslationDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
