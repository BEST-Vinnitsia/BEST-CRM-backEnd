import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ITranslation } from 'src/interfaces/translation.interface';

export class TranslationDto implements ITranslation {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ example: randomUUID() })
  meetingId: string;

  @ApiProperty({ example: randomUUID() })
  memberId: string;

  @ApiProperty({ example: randomUUID() })
  membershipId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
