import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ITranslationDelete } from 'src/interfaces/translation.interface';
import { randomUUID } from 'crypto';

export class TranslationDeleteDto implements ITranslationDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}
