import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TranslationGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
