import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ITranslationGetById } from 'src/interfaces/translation.interface';
import { randomUUID } from 'crypto';

export class TranslationGetByIdDto implements ITranslationGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
